// Constants

const stations = [
  {
    x: 48,
    y: 768,
    name: "Boulogne, Pont de Saint-Cloud, Rond Point Rhin et Danube",
  },
  { x: 100, y: 815, name: "Marcel Sembat" },
  { x: 115, y: 320, name: "Esplanade de la Défense" },
  { x: 116, y: 593, name: "La Muette" },
  { x: 116, y: 634, name: "Ranelagh" },
  { x: 116, y: 674, name: "Jasmin" },
  { x: 116, y: 715, name: "Michel Ange Auteuil" },
  { x: 117, y: 741, name: "Michel Ange Molitor" },
  { x: 118, y: 770, name: "Exelmans" },
  { x: 118, y: 794, name: "Porte de Saint-Cloud" },
  { x: 126, y: 547, name: "Rue de la Pompe" },
  { x: 134, y: 742, name: "Chardon Lagâche" },
  { x: 135, y: 339, name: "Pont de Neuilly" },
  { x: 147, y: 715, name: "Église d'Auteuil" },
  { x: 148, y: 441, name: "Porte Dauphine" },
  { x: 154, y: 359, name: "Les Sablons" },
  { x: 160, y: 732, name: "Mirabeau" },
  { x: 169, y: 548, name: "Trocadéro" },
  { x: 171, y: 505, name: "Boissière" },
  { x: 172, y: 601, name: "Passy" },
  { x: 178, y: 381, name: "Porte Maillot" },
  { x: 181, y: 476, name: "Victor Hugo" },
  { x: 192, y: 715, name: "Javel" },
  { x: 201, y: 631, name: "Bir-Hakeim" },
  { x: 204, y: 474, name: "Kléber" },
  { x: 208, y: 413, name: "Argentine" },
  { x: 209, y: 823, name: "Place Balard" },
  { x: 212, y: 549, name: "Iéna" },
  { x: 220, y: 893, name: "Mairie d'Issy" },
  { x: 221, y: 706, name: "Charles Michels" },
  { x: 227, y: 657, name: "Dupleix" },
  { x: 230, y: 799, name: "Lourmel" },
  { x: 231, y: 245, name: "Pont de Levallois, Bécon" },
  { x: 231, y: 441, name: "Charles de Gaulle, Étoile" },
  { x: 237, y: 693, name: "Avenue Émile Zola" },
  { x: 243, y: 258, name: "Anatole France" },
  { x: 246, y: 866, name: "Corentin Celton" },
  { x: 252, y: 779, name: "Boucicaut" },
  { x: 255, y: 269, name: "Louise Michel" },
  { x: 258, y: 530, name: "Alma Marceau" },
  { x: 259, y: 410, name: "Ternes" },
  { x: 261, y: 636, name: "École Militaire" },
  { x: 262, y: 467, name: "George V" },
  { x: 262, y: 720, name: "Commerce" },
  { x: 263, y: 684, name: "La Motte Picquet, Grenelle" },
  { x: 263, y: 748, name: "Félix Faure" },
  { x: 268, y: 281, name: "Porte de Champerret" },
  { x: 270, y: 163, name: "Gabriel Péri, Asnières-Gennevilliers" },
  { x: 272, y: 841, name: "Porte de Versailles" },
  { x: 283, y: 386, name: "Courcelles" },
  { x: 287, y: 300, name: "Péreire" },
  { x: 287, y: 600, name: "La Tour-Maubourg" },
  { x: 291, y: 496, name: "Franklin D. Roosevelt" },
  { x: 296, y: 816, name: "Convention" },
  { x: 298, y: 312, name: "Wagram" },
  { x: 303, y: 196, name: "Mairie de Clichy" },
  { x: 304, y: 364, name: "Monceau" },
  { x: 311, y: 698, name: "Cambronne" },
  { x: 312, y: 576, name: "Invalides" },
  { x: 313, y: 326, name: "Malesherbes" },
  { x: 313, y: 517, name: "Champs Élysées, Clémenceau" },
  { x: 314, y: 616, name: "Varenne" },
  { x: 322, y: 793, name: "Vaugirard" },
  { x: 324, y: 464, name: "Saint-Philippe du Roule" },
  { x: 326, y: 707, name: "Ségur" },
  { x: 328, y: 342, name: "Villiers" },
  { x: 329, y: 663, name: "Saint-Francois Xavier" },
  { x: 334, y: 506, name: "Madeleine" },
  { x: 334, y: 537, name: "Concorde" },
  { x: 335, y: 587, name: "Assemblée Nationale" },
  { x: 337, y: 725, name: "Sèvres Lecourbe" },
  { x: 341, y: 234, name: "Porte de Clichy" },
  { x: 343, y: 444, name: "Miromesnil" },
  { x: 345, y: 768, name: "Volontaires" },
  { x: 351, y: 934, name: "Châtillon-Montrouge" },
  { x: 352, y: 875, name: "Malakoff-Plateau de Vanves" },
  { x: 352, y: 903, name: "Malakoff-Rue Étienne Dolet" },
  { x: 353, y: 316, name: "Rome" },
  { x: 353, y: 367, name: "Europe" },
  { x: 358, y: 609, name: "Solférino" },
  { x: 359, y: 428, name: "Saint-Augustin" },
  { x: 360, y: 698, name: "Duroc" },
  { x: 362, y: 255, name: "Brochant" },
  { x: 370, y: 843, name: "Porte de Vanves" },
  { x: 375, y: 740, name: "Pasteur" },
  { x: 376, y: 548, name: "Tuileries" },
  { x: 382, y: 632, name: "Rue du Bac" },
  { x: 382, y: 676, name: "Vaneau" },
  { x: 383, y: 283, name: "La Fourche" },
  { x: 384, y: 223, name: "Porte de Saint-Ouen" },
  { x: 384, y: 253, name: "Guy Môquet" },
  { x: 385, y: 309, name: "Place de Clichy" },
  { x: 385, y: 405, name: "Saint-Lazare" },
  { x: 385, y: 729, name: "Falguière" },
  { x: 386, y: 346, name: "Liège" },
  { x: 393, y: 820, name: "Plaisance" },
  { x: 397, y: 443, name: "Havre Caumartin" },
  { x: 403, y: 654, name: "Sèvres Babylone" },
  { x: 408, y: 193, name: "Garibaldi" },
  { x: 416, y: 797, name: "Pernety" },
  { x: 417, y: 463, name: "Opéra" },
  { x: 417, y: 504, name: "Pyramides" },
  { x: 418, y: 548, name: "Palais Royal, Musée du Louvre" },
  { x: 424, y: 385, name: "Trinité d'Estienne d'Orves" },
  { x: 427, y: 677, name: "Rennes" },
  { x: 428, y: 731, name: "Montparnasse Bienvenue" },
  { x: 429, y: 773, name: "Gaité" },
  { x: 433, y: 169, name: "Mairie de Saint-Ouen" },
  { x: 434, y: 663, name: "Saint-Sulpice" },
  { x: 435, y: 310, name: "Blanche" },
  { x: 435, y: 698, name: "Saint-Placide" },
  { x: 442, y: 443, name: "Chaussée d'Antin, La Fayette" },
  { x: 442, y: 489, name: "Quatre Septembre" },
  { x: 446, y: 740, name: "Edgar Quinet" },
  { x: 448, y: 637, name: "Saint-Germain-des-Prés" },
  { x: 450, y: 710, name: "Notre-Dame-des-Champs" },
  { x: 453, y: 549, name: "Louvre, Rivoli" },
  { x: 456, y: 643, name: "Mabillon" },
  { x: 458, y: 144, name: "Carrefour Pleyel" },
  { x: 465, y: 734, name: "Vavin" },
  { x: 471, y: 444, name: "Richelieu Drouot" },
  { x: 473, y: 854, name: "Porte d'Orléans" },
  { x: 478, y: 385, name: "Notre Dame de Lorette" },
  { x: 478, y: 500, name: "Bourse" },
  { x: 480, y: 550, name: "Pont-Neuf" },
  { x: 485, y: 400, name: "Le Peletier" },
  { x: 486, y: 264, name: "Lamarck Caulaincourt" },
  { x: 488, y: 289, name: "Abbesses" },
  { x: 488, y: 311, name: "Pigalle" },
  { x: 488, y: 348, name: "Saint-Georges" },
  { x: 489, y: 641, name: "Odéon" },
  { x: 490, y: 749, name: "Raspail" },
  { x: 497, y: 833, name: "Alésia" },
  { x: 502, y: 617, name: "Saint-Michel" },
  { x: 504, y: 380, name: "Cadet" },
  { x: 505, y: 798, name: "Mouton-Duvernet" },
  { x: 508, y: 769, name: "Denfert Rochereau" },
  { x: 509, y: 448, name: "Rue Montmartre, Grands Boulevards" },
  { x: 511, y: 582, name: "Cité" },
  { x: 514, y: 262, name: "Jules Joffrin" },
  { x: 515, y: 222, name: "Porte de Clignancourt" },
  { x: 515, y: 500, name: "Sentier" },
  { x: 516, y: 641, name: "Cluny, La Sorbonne" },
  { x: 517, y: 131, name: "Saint-Denis-Porte de Paris" },
  { x: 527, y: 308, name: "Anvers" },
  { x: 527, y: 511, name: "Étienne Marcel" },
  { x: 527, y: 531, name: "Les Halles" },
  { x: 527, y: 787, name: "Saint-Jacques" },
  { x: 528, y: 551, name: "Châtelet" },
  { x: 530, y: 237, name: "Simplon" },
  { x: 541, y: 658, name: "Maubert Mutualité" },
  { x: 544, y: 282, name: "Château Rouge" },
  { x: 545, y: 263, name: "Marcadet Poissonniers" },
  { x: 553, y: 373, name: "Poissonnière" },
  { x: 554, y: 803, name: "Glacière" },
  { x: 559, y: 447, name: "Bonne Nouvelle" },
  { x: 560, y: 678, name: "Cardinal Lemoine" },
  { x: 565, y: 502, name: "Réaumur Sébastopol" },
  { x: 569, y: 549, name: "Hôtel de Ville" },
  { x: 569, y: 713, name: "Place Monge" },
  { x: 570, y: 742, name: "Censier Daubenton" },
  { x: 574, y: 311, name: "Barbès Rochechouart" },
  { x: 581, y: 593, name: "Pont-Marie" },
  { x: 582, y: 115, name: "Basilique de Saint-Denis" },
  { x: 585, y: 802, name: "Corvisart" },
  { x: 587, y: 447, name: "Strasbourg Saint-Denis" },
  { x: 588, y: 769, name: "Les Gobelins" },
  { x: 589, y: 686, name: "Jussieu" },
  { x: 595, y: 523, name: "Rambuteau" },
  { x: 598, y: 400, name: "Château d'Eau" },
  { x: 603, y: 584, name: "Saint-Paul, Le Marais" },
  { x: 603, y: 616, name: "Sully Morland" },
  { x: 606, y: 822, name: "Tolbiac" },
  { x: 606, y: 843, name: "Maison Blanche" },
  { x: 606, y: 866, name: "Le Kremlin-Bicêtre" },
  { x: 606, y: 913, name: "Villejuif, P. Vaillant Couturier" },
  { x: 606, y: 933, name: "Villejuif, Louis Aragon" },
  { x: 607, y: 801, name: "Place d'Italie" },
  { x: 607, y: 892, name: "Villejuif, Léo Lagrange" },
  { x: 611, y: 88, name: "Saint-Denis-Université" },
  { x: 621, y: 333, name: "Gare du Nord" },
  { x: 622, y: 493, name: "Arts et Métiers" },
  { x: 625, y: 310, name: "La Chapelle" },
  { x: 627, y: 373, name: "Gare de l'Est" },
  { x: 628, y: 225, name: "Porte de la Chapelle" },
  { x: 629, y: 251, name: "Marx Dormoy" },
  { x: 633, y: 763, name: "Campo-Formio" },
  { x: 634, y: 859, name: "Porte d'Italie" },
  { x: 638, y: 421, name: "Jacques Bonsergent" },
  { x: 639, y: 473, name: "Temple" },
  { x: 644, y: 508, name: "Filles du Calvaire" },
  { x: 644, y: 535, name: "Saint-Sébastien-Froissart" },
  { x: 644, y: 563, name: "Chemin Vert" },
  { x: 645, y: 802, name: "Nationale" },
  { x: 649, y: 595, name: "Bastille" },
  { x: 649, y: 667, name: "Quai de la Rapée" },
  { x: 650, y: 714, name: "Gare d'Austerlitz" },
  { x: 650, y: 743, name: "Saint-Marcel" },
  { x: 659, y: 359, name: "Château Landon" },
  { x: 66, y: 849, name: "Pont de Sèvres" },
  { x: 664, y: 456, name: "République" },
  { x: 669, y: 858, name: "Porte de Choisy" },
  { x: 672, y: 562, name: "Bréguet-Sabin" },
  { x: 673, y: 615, name: "Ledru Rollin" },
  { x: 677, y: 481, name: "Oberkampf" },
  { x: 677, y: 802, name: "Chevaleret" },
  { x: 679, y: 673, name: "Gare de Lyon" },
  { x: 68, y: 749, name: "Boulogne, Jean Jaurès" },
  { x: 682, y: 345, name: "Louis Blanc" },
  { x: 684, y: 314, name: "Stalingrad" },
  { x: 686, y: 432, name: "Goncourt" },
  { x: 693, y: 286, name: "Riquet" },
  { x: 694, y: 538, name: "Richard Lenoir" },
  { x: 703, y: 859, name: "Porte d'Ivry" },
  { x: 708, y: 272, name: "Crimée" },
  { x: 711, y: 332, name: "Jaurès" },
  { x: 711, y: 788, name: "Quai de la Gare" },
  { x: 712, y: 369, name: "Colonel Fabien" },
  { x: 713, y: 407, name: "Belleville" },
  { x: 719, y: 633, name: "Faidherbe-Chaligny" },
  { x: 723, y: 256, name: "Corentin-Cariou" },
  { x: 724, y: 533, name: "Saint-Ambroise" },
  { x: 725, y: 872, name: "Pierre Curie" },
  { x: 731, y: 313, name: "Laumière" },
  { x: 731, y: 354, name: "Bolivar" },
  { x: 735, y: 435, name: "Couronnes" },
  { x: 737, y: 481, name: "Parmentier" },
  { x: 740, y: 240, name: "Porte de la Villette" },
  { x: 741, y: 656, name: "Reuilly Diderot" },
  { x: 742, y: 888, name: "Mairie d'Ivry" },
  { x: 743, y: 551, name: "Voltaire" },
  { x: 746, y: 753, name: "Bercy" },
  { x: 747, y: 391, name: "Pyrénées" },
  { x: 748, y: 805, name: "Bibliothèque François Mitterand" },
  { x: 758, y: 295, name: "Ourcq" },
  { x: 759, y: 496, name: "Rue Saint-Maur" },
  { x: 762, y: 462, name: "Ménilmontant" },
  { x: 762, y: 571, name: "Charonne" },
  { x: 765, y: 788, name: "Cour Saint-Émilion" },
  { x: 766, y: 212, name: "Aubervilliers-Pantin, Quatre Chemins" },
  { x: 766, y: 681, name: "Montgallet" },
  { x: 767, y: 731, name: "Dugommier" },
  { x: 770, y: 359, name: "Buttes Chaumont" },
  { x: 780, y: 588, name: "Rue des Boulets" },
  { x: 786, y: 389, name: "Jourdain" },
  { x: 788, y: 495, name: "Père Lachaise" },
  { x: 788, y: 522, name: "Philippe-Auguste" },
  { x: 788, y: 556, name: "Alexandre Dumas" },
  { x: 789, y: 192, name: "Fort d'Aubervilliers" },
  { x: 791, y: 158, name: "La Courneuve, 8 Mai 1945" },
  { x: 791, y: 360, name: "Botzaris" },
  { x: 791, y: 593, name: "Avron" },
  { x: 791, y: 706, name: "Daumesnil" },
  { x: 794, y: 295, name: "Porte de Pantin" },
  { x: 799, y: 764, name: "Porte de Charenton" },
  { x: 808, y: 619, name: "Nation" },
  { x: 808, y: 722, name: "Michel Bizot" },
  { x: 813, y: 687, name: "Bel Air" },
  { x: 818, y: 795, name: "Liberté" },
  { x: 820, y: 743, name: "Porte Dorée" },
  { x: 821, y: 334, name: "Danube" },
  { x: 821, y: 388, name: "Place des Fêtes" },
  { x: 830, y: 493, name: "Gambetta" },
  { x: 831, y: 667, name: "Picpus" },
  { x: 832, y: 295, name: "Hoche" },
  { x: 834, y: 602, name: "Buzenval" },
  { x: 841, y: 818, name: "Charenton-Écoles" },
  { x: 845, y: 354, name: "Pré-Saint-Gervais" },
  { x: 845, y: 634, name: "Porte de Vincennes" },
  { x: 849, y: 588, name: "Maraîchers" },
  { x: 85, y: 832, name: "Billancourt" },
  { x: 855, y: 390, name: "Télégraphe" },
  { x: 856, y: 458, name: "Pelleport" },
  { x: 858, y: 281, name: "Église de Pantin" },
  { x: 864, y: 574, name: "Porte de Montreuil" },
  { x: 865, y: 841, name: "École Vétérinaire de Maisons-Alfort" },
  { x: 87, y: 731, name: "Porte d'Auteuil" },
  { x: 872, y: 496, name: "Porte de Bagnolet" },
  { x: 876, y: 652, name: "Saint-Mandé, Tourelle" },
  { x: 877, y: 262, name: "Bobigny-Pantin, Raymond Queneau" },
  { x: 878, y: 559, name: "Robespierre" },
  { x: 880, y: 387, name: "Porte des Lilas" },
  { x: 881, y: 424, name: "Saint-Fargeau" },
  { x: 882, y: 860, name: "Maisons-Alfort, Stade" },
  { x: 882, y: 915, name: "Créteil-Université" },
  { x: 883, y: 878, name: "Maisons-Alfort les Juilliottes" },
  { x: 883, y: 897, name: "Créteil-l'Echat, Hôpital Henri Mondor" },
  { x: 883, y: 934, name: "Créteil-Préfecture" },
  { x: 892, y: 545, name: "Croix de Chavaux" },
  { x: 892, y: 669, name: "Bérault" },
  { x: 902, y: 237, name: "Bobigny, Pablo Picasso" },
  { x: 904, y: 496, name: "Galliéni" },
  { x: 906, y: 358, name: "Mairie des Lilas" },
  { x: 906, y: 530, name: "Mairie de Montreuil" },
  { x: 907, y: 682, name: "Château de Vincennes" },
  { x: 98, y: 299, name: "Grande Arche de la Défense" },
];

const importantStations = [
  "Bastille",
  "Bobigny, Pablo Picasso",
  "Boulogne, Pont de Saint-Cloud, Rond Point Rhin et Danube",
  "Champs Élysées, Clémenceau",
  "Charles de Gaulle, Étoile",
  "Château de Vincennes",
  "Châtelet",
  "Châtillon-Montrouge",
  "Concorde",
  "Créteil-Préfecture",
  "Gabriel Péri, Asnières-Gennevilliers",
  "Galliéni",
  "Gare de Lyon",
  "Gare de Lyon",
  "Gare de l'Est",
  "Gare du Nord",
  "Grande Arche de la Défense",
  "Hôtel de Ville",
  "Hôtel de Ville",
  "La Courneuve, 8 Mai 1945",
  "Louvre, Rivoli",
  "Mairie d'Issy",
  "Mairie d'Ivry",
  "Mairie des Lilas",
  "Montparnasse Bienvenue",
  "Nation",
  "Opéra",
  "Place Balard",
  "Place d'Italie",
  "Pont de Levallois, Bécon",
  "Pont de Sèvres",
  "Porte d'Orléans",
  "Porte de Clignancourt",
  "Porte de la Chapelle",
  "République",
  "Saint-Denis-Université",
  "Saint-Lazare",
  "Villejuif, Louis Aragon",
];

const lineColors = {
  1: "#FFCD00",
  2: "#003CA6",
  3: "#837902",
  "3bis": "#6EC4E8",
  4: "#CF009E",
  5: "#FF7E2E",
  6: "#6ECA97",
  7: "#FA9ABA",
  "7bis": "#6ECA97",
  8: "#E19BDF",
  9: "#B6BD00",
  10: "#C9910D",
  11: "#704B1C",
  12: "#007852",
  13: "#6EC4E8",
  14: "#62259D",
};

const zoomThresholds = [
  { scale: 1, fontSize: "12px" },
  { scale: 2, fontSize: "5px" },
  { scale: 10, fontSize: "2px" },
];

// API Fetch functions

async function fetchData(url, payload) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Erreur réseau lors de la récupération des données.");
    }
    return response.json();
  });
}

function fetchPath(startStationName, endStationName) {
  fetchData("http://127.0.0.1:5000/path", {
    start_station_name: startStationName,
    end_station_name: endStationName,
  })
    .then((data) => {
      console.log(data);
      drawPath(data);
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des données:", error);
    });
}

function fetchAcpmEdges() {
  fetchData("http://127.0.0.1:5000/acpm", {
    start_station_name: "Grande Arche de la Défense",
  })
    .then((data) => {
      drawAcpm(data);
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des données:", error);
    });
}

// Event listeners

document.getElementById("journeyForm").addEventListener("submit", function (e) {
  e.preventDefault();
  clearMap();

  const startStationName = e.target.querySelector("#startStation").value;
  const endStationName = e.target.querySelector("#endStation").value;

  e.target.querySelector("#startStation").value = "";
  e.target.querySelector("#endStation").value = "";

  fetchPath(startStationName, endStationName);
});

document.getElementById("showAcpm").addEventListener("click", function () {
  clearMap();

  const journeyDetails = document.querySelector(".journey-details");
  journeyDetails.style.visibility = "hidden";
  while (journeyDetails.firstChild) {
    journeyDetails.removeChild(journeyDetails.firstChild);
  }

  fetchAcpmEdges();
});

// Utility functions

function getLineColor(line) {
  return lineColors[line];
}

function findStation(stationName) {
  return stations.find((station) => station.name === stationName);
}

function clearMap() {
  const lineSegments = document.querySelectorAll(".line-segment");
  lineSegments.forEach((segment) => segment.remove());
}

function createElement(type, classes, styles = {}) {
  const element = document.createElement(type);
  if (classes) element.className = classes;
  Object.entries(styles).forEach(([key, value]) => (element.style[key] = value));
  return element;
}

function populateStationList() {
  const dataList = document.getElementById("stationsList");
  stations.forEach((station) => {
    const option = document.createElement("option");
    option.value = station.name;
    dataList.appendChild(option);
  });
}

// Draw functions

function drawLineOnMap(startStation, endStation, color) {
  const mapElement = document.querySelector(".map");
  const deltaX = endStation.x - startStation.x;
  const deltaY = endStation.y - startStation.y;
  const angleInDegrees = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  const lineSegment = document.createElement("div");
  lineSegment.className = "line-segment";
  lineSegment.style.backgroundColor = color;
  lineSegment.style.position = "absolute";
  lineSegment.style.left = `${startStation.x}px`;
  lineSegment.style.top = `${startStation.y}px`;
  lineSegment.style.width = `${distance}px`;
  lineSegment.style.height = "4px";
  lineSegment.style.transformOrigin = "0% 0%";
  lineSegment.style.transform = `rotate(${angleInDegrees}deg)`;

  mapElement.appendChild(lineSegment);
}

function drawPath(journeyResponse) {
  const journeyDetails = document.querySelector(".journey-details");
  const acpm = document.querySelector(".acpm-weight");

  acpm.style.visibility = "hidden";
  journeyDetails.style.visibility = "visible";

  while (journeyDetails.firstChild) {
    journeyDetails.removeChild(journeyDetails.firstChild);
  }

  for (const journey of journeyResponse.journey) {
    const lineColor = getLineColor(journey.line);

    for (let i = 0; i < journey.stations.length - 1; i++) {
      const startStation = findStation(journey.stations[i]);
      const endStation = findStation(journey.stations[i + 1]);
      drawLineOnMap(startStation, endStation, lineColor);
    }
  }

  for (const journey of journeyResponse.journey) {
    if (journey.stations.length === 1) {
      continue;
    }

    const lineColor = getLineColor(journey.line);
    const journeyStep = document.createElement("div");
    journeyStep.className = "journey-step";

    const journeyTitle = document.createElement("div");
    journeyTitle.className = "journey-title";

    const journeyLine = document.createElement("div");
    journeyLine.className = "journey-line";
    journeyLine.innerText = journey.line;
    journeyLine.style.backgroundColor = lineColor;
    journeyTitle.appendChild(journeyLine);

    const stationStep = document.createElement("div");
    stationStep.className = "journey-station-step";
    stationStep.innerText = journey.start_station;
    journeyTitle.appendChild(stationStep);

    journeyStep.appendChild(journeyTitle);

    const stationsList = document.createElement("div");
    stationsList.className = "journey-stations-list";

    for (let i = 1; i < journey.stations.length - 1; i++) {
      const stationDiv = document.createElement("div");
      stationDiv.innerText = journey.stations[i];
      stationsList.appendChild(stationDiv);
    }

    const endStationDiv = document.createElement("div");
    endStationDiv.innerText = journey.stations[journey.stations.length - 1];
    stationsList.appendChild(endStationDiv);

    journeyStep.appendChild(stationsList);

    journeyDetails.appendChild(journeyStep);
  }

  const journeyTotalTime = document.createElement("div");
  journeyTotalTime.className = "journey-total-time";
  journeyTotalTime.innerText = `Temps total : ${journeyResponse.total_time_minutes} minutes`;
  journeyDetails.appendChild(journeyTotalTime);
}

function drawAcpm(data) {
  for (const edge of data.edges) {
    const startStation = findStation(edge.from);
    const endStation = findStation(edge.to);
    drawLineOnMap(startStation, endStation, "red");
  }

  const acpm = document.querySelector(".acpm-weight");
  acpm.style.visibility = "visible";
  acpm.innerText = `Poids de l'Arbre Couvrant : ${data.total_weight}`;
}

function createStationElement(station) {
  const isImportant = importantStations.includes(station.name);

  const stationElement = createElement("div", `station ${isImportant ? "important-station" : ""}`, {
    left: `${station.x}px`,
    top: `${station.y}px`,
  });
  const stationName = createElement("div", `station-name ${isImportant ? "important-station-name" : ""}`, {
    left: `${station.x}px`,
    top: `${station.y}px`,
  });

  stationName.innerText = station.name;

  const map = document.querySelector(".map");
  map.appendChild(stationElement);
  map.appendChild(stationName);
}

// Global State & Initialization

document.addEventListener("DOMContentLoaded", function () {
  stations.forEach(createStationElement);

  const elem = document.querySelector(".map");
  const panZoom = panzoom(elem, {
    maxZoom: 10,
    minZoom: 1,
    smoothScroll: false,
    zoomDoubleClickSpeed: 1,
  });

  panZoom.on("zoom", (e) => {
    const transformData = panZoom.getTransform();
    const appliedFontSize = zoomThresholds.reduce(
      (acc, curr) => (transformData.scale > curr.scale ? curr.fontSize : acc),
      "12px"
    );
    document.querySelectorAll(".important-station-name").forEach((name) => (name.style.fontSize = appliedFontSize));

    const visibility = transformData.scale > 2 ? "visible" : "hidden";
    document
      .querySelectorAll(".station-name:not(.important-station-name)")
      .forEach((name) => (name.style.visibility = visibility));
  });
});

populateStationList();
