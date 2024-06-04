from flask import Flask, request, jsonify, send_from_directory
from itertools import islice
from flask_cors import CORS

'''
Bloc 1: Définition des classes principales

1. La classe "Station" représente une station individuelle du métro. Chaque station a un identifiant unique, 
un nom, une ligne, une indication si elle est un terminus, et un identifiant de branchement.
2. La classe "MetroGraph" représente le réseau complet du métro sous forme de graphe. Elle contient un dictionnaire 
de stations, où la clé est l'ID de la station et la valeur est l'objet "Station". Cette classe contient également 
des méthodes pour ajouter des stations, ajouter des arêtes entre les stations, et divers algorithmes sur les graphes 
comme le parcours en largeur (bfs) pour vérifier la connexité, Bellman-Ford et la construction d'un arbre couvrant minimal (minimum spanning tree).
'''

class Station:
    def __init__(self, id, name, line, is_terminus, branchement):
        self.id = id
        self.name = name
        self.line = line
        self.is_terminus = is_terminus
        self.branchement = branchement
        self.adjacent_stations = []

    def add_adjacent(self, other_station, time):
        self.adjacent_stations.append((other_station, time))

class MetroGraph:
    def __init__(self):
        self.stations = {}

    def add_station(self, station):
        self.stations[station.id] = station

    def add_edge(self, id1, id2, time):
        station1 = self.stations[id1]
        station2 = self.stations[id2]
        station1.add_adjacent(station2, time)
        station2.add_adjacent(station1, time)

    def get_station(self, id):
        return self.stations.get(id, None)
    
    def bfs(self, start_station_id):
        visited = set()
        queue = [start_station_id]

        while queue:
            current = queue.pop(0)
            if current not in visited:
                visited.add(current)
                for adjacent, _ in self.stations[current].adjacent_stations:
                    if adjacent.id not in visited:
                        queue.append(adjacent.id)

        return visited

    def is_connected(self):
        if not self.stations:
            return False

        start_station_id = next(iter(self.stations))
        visited = self.bfs(start_station_id)

        return len(visited) == len(self.stations)


    def bellman_ford(self, start_station_id):
        distance = {station: float('infinity') for station in self.stations}
        predecessor = {station: None for station in self.stations}
        distance[start_station_id] = 0

        for _ in range(len(self.stations) - 1):
            for station_id in self.stations:
                for adjacent, time in self.stations[station_id].adjacent_stations:
                    if distance[station_id] + time < distance[adjacent.id]:
                        distance[adjacent.id] = distance[station_id] + time
                        predecessor[adjacent.id] = station_id

        return distance, predecessor
    
    def minimum_spanning_tree(self, start_station_id):
        visited = set([start_station_id])
        mst = set()
        total_weight = 0

        edges = []
        for adjacent, wt in self.stations[start_station_id].adjacent_stations:
            edges.append((wt, start_station_id, adjacent.id))

        while edges:
            edges = sorted(edges, key=lambda x: x[0])
            time, frm, to = edges.pop(0)
                
            if to not in visited:
                visited.add(to)
                mst.add((frm, to))
                total_weight += time
                for adjacent, wt in self.stations[to].adjacent_stations:
                    if adjacent.id not in visited:
                        edges.append((wt, to, adjacent.id))

        return mst, total_weight

'''
Bloc 2: Lecture du fichier et construction du graphe

Cette fonction lit le fichier "metro.txt" et construit le graphe du métro. Elle commence par créer un objet vide 
"MetroGraph". Elle lit ensuite le fichier ligne par ligne. Si la ligne commence par "V", cela signifie que c'est 
une station, donc elle crée un nouvel objet "Station" et l'ajoute au graphe. Si la ligne commence par "E", 
cela signifie que c'est une arête, donc elle ajoute une arête entre les deux stations concernées.
'''

def read_metro_file(source_filename):
    graph = MetroGraph()

    with open(source_filename, 'r', encoding='utf-8') as f:
        for line in islice(f, 13, None):
            line = line.replace(";", "").strip()
            parts = line.split()

            if not parts:
                continue

            if parts[0] == "V":
                id = int(parts[1])
                name = " ".join(parts[2:-3])
                line_num = parts[-3]
                terminus = parts[-2] == "True"
                branchement = int(parts[-1])
                station = Station(id, name, line_num, terminus, branchement)
                graph.add_station(station)

            elif parts[0] == "E":
                src, dest, time = map(int, parts[1:])
                graph.add_edge(src, dest, time)

    return graph

'''
Bloc 3: Fonctions utilitaires

1. "edge_exists": Vérifie si une arête est déjà présente dans une liste.
2. "get_station_id_by_name": Récupère l'ID d'une station en fonction de son nom.
3. "construct_path": À partir d'un dictionnaire de prédécesseurs généré par l'algorithme de Bellman-Ford, 
construit le chemin le plus court entre deux stations.
4. "compute_shortest_path": Utilise la méthode Bellman-Ford de "MetroGraph" pour trouver le chemin le plus court 
entre deux stations.
'''

def edge_exists(edges, frm, to):
    """Vérifie si une arête est déjà présente dans la liste"""
    return {"from": frm, "to": to} in edges or {"from": to, "to": frm} in edges

def get_station_id_by_name(metro_graph, station_name):
    for id, station in metro_graph.stations.items():
        if station.name == station_name:
            return id
    return None

def construct_path(metro_graph, predecessor, start_station_id, end_station_id, distance):
    path = []
    current_station = end_station_id
    while current_station != start_station_id:
        path.append(current_station)
        current_station = predecessor[current_station]
    path.append(start_station_id)
    path.reverse()

    journey = []
    current_line = metro_graph.stations[path[0]].line
    current_journey_segment = {
        "start_station": metro_graph.stations[path[0]].name,
        "line": current_line,
        "stations": [metro_graph.stations[path[0]].name]
    }

    for i in range(1, len(path)):
        station_name = metro_graph.stations[path[i]].name
        if metro_graph.stations[path[i]].line != current_line:
            journey.append(current_journey_segment)
            current_line = metro_graph.stations[path[i]].line
            current_journey_segment = {
                "start_station": station_name,
                "line": current_line,
                "stations": []
            }

        current_journey_segment["stations"].append(station_name)
    journey.append(current_journey_segment)

    total_time_minutes = distance[end_station_id] // 60

    return {
        "journey": journey,
        "total_time_minutes": total_time_minutes
    }

def compute_shortest_path(metro_graph, start_station_name, end_station_name):
    start_station_id = get_station_id_by_name(metro_graph, start_station_name)
    end_station_id = get_station_id_by_name(metro_graph, end_station_name)
    if start_station_id is None or end_station_id is None:
        return None
    distance, predecessor = metro_graph.bellman_ford(start_station_id)
    return construct_path(metro_graph, predecessor, start_station_id, end_station_id, distance)

'''
Bloc 4: Initialisation de l'application Flask et chargement du graphe

Ici, nous initialisons l'application Flask.
Nous lisons ensuite le fichier "metro.txt" pour construire le graphe du métro. 
Si le graphe n'est pas connexe, nous affichons une erreur.
'''

app = Flask(__name__)
metro_graph = read_metro_file("metro.txt")
CORS(app)

if not metro_graph.is_connected():
    print("Erreur : Le graphe n'est pas connexe!")
else:
    print("Le graphe est connexe!")
    @app.route('/')
    def index():
        return send_from_directory('static', 'html/index.html')

    @app.route('/favicon.ico')
    def favicon():
        return send_from_directory( 'static','favicon.ico'),


    @app.route('/path', methods=['POST'])
    def get_path():
        data = request.get_json()
        result = compute_shortest_path(metro_graph, data['start_station_name'], data['end_station_name'])
        if result:
            return jsonify(result)
        else:
            return jsonify({"error": "Nom de station invalide!"}), 400

    @app.route('/acpm', methods=['POST'])
    def get_acpm():
        data = request.get_json()
        start_station_name = data.get('start_station_name')

        start_station_id = get_station_id_by_name(metro_graph, start_station_name)
        if start_station_id is None:
            return jsonify({"error": "Nom de station invalide!"}), 400

        acpm_edges, total_weight = metro_graph.minimum_spanning_tree(start_station_id)
        
        edges_result = []
        for edge in acpm_edges:
            frm = metro_graph.stations[edge[0]].name
            to = metro_graph.stations[edge[1]].name
            if not edge_exists(edges_result, frm, to):
                edges_result.append({"from": frm, "to": to})

        acpm_result = {
            "edges": edges_result,
            "total_weight": total_weight
        }
        return jsonify(acpm_result)

    if __name__ == "__main__":
        app.run()