/* =====================================================
   SAVEURS DU MONDE – Script principal
   ===================================================== */

// ─────────────────────────────────────────────────────
// DONNÉES : recettes codées en dur (pas de base de données)
// ─────────────────────────────────────────────────────
const RECIPES = [
  {
    id: 1,
    titre: "Ratatouille Provençale",
    categorie: "Plat principal",
    cuisine: "Française",
    difficulte: "Facile",
    saison: "Été",
    allergenes: [],
    temps: 50,
    portions: 4,
    image: "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?w=600&q=80",
    video: "https://www.youtube-nocookie.com/embed/4sm39CWrmns",
    prixParPortion: 1.74,
    prixIngredients: [0.90, 1.60, 1.20, 1.40, 0.20, 0.20, 0.60, 0.80, 0.05],
    ingredients: [
      "2 courgettes",
      "2 aubergines",
      "4 tomates",
      "2 poivrons rouges",
      "1 oignon",
      "4 gousses d'ail",
      "4 c. à soupe d'huile d'olive",
      "Thym, laurier, basilic frais",
      "Sel & poivre"
    ],
    etapes: [
      "Laver et couper tous les légumes en rondelles ou en dés.",
      "Faire chauffer l'huile dans une grande cocotte. Y faire revenir l'oignon et l'ail 3 minutes.",
      "Ajouter les poivrons et faire revenir 5 minutes.",
      "Incorporer les aubergines, puis les courgettes. Mélanger bien.",
      "Ajouter les tomates, le thym et le laurier. Saler et poivrer.",
      "Couvrir et laisser mijoter à feu doux 30 minutes. Servir avec du basilic frais."
    ]
  },
  {
    id: 2,
    titre: "Tiramisu Classique",
    categorie: "Dessert",
    cuisine: "Italienne",
    difficulte: "Moyen",
    saison: "Toutes saisons",
    allergenes: ["Gluten", "Œufs", "Lait"],
    temps: 25,
    portions: 6,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80",
    video: "https://www.youtube-nocookie.com/embed/YnJVwAYvH8Y",
    prixParPortion: 1.12,
    prixIngredients: [2.50, 1.20, 0.10, 0.20, 1.80, 0.50, 0.40],
    ingredients: [
      "500 g de mascarpone",
      "4 œufs (jaunes et blancs séparés)",
      "100 g de sucre",
      "200 ml de café fort refroidi",
      "30 biscuits à la cuillère",
      "4 c. à soupe de marsala ou rhum (optionnel)",
      "Cacao en poudre non sucré"
    ],
    etapes: [
      "Fouetter les jaunes d'œufs avec le sucre jusqu'à ce que le mélange blanchisse.",
      "Incorporer le mascarpone en mélangeant délicatement.",
      "Monter les blancs en neige ferme et les plier dans la préparation.",
      "Mélanger le café et l'alcool dans un bol.",
      "Tremper rapidement les biscuits dans le café et en tapisser le fond d'un plat.",
      "Déposer la moitié de la crème, puis une nouvelle couche de biscuits.",
      "Terminer par le reste de crème. Saupoudrer généreusement de cacao.",
      "Réfrigérer au moins 4 heures avant de servir."
    ]
  },
  {
    id: 3,
    titre: "Pad Thaï au Poulet",
    categorie: "Plat principal",
    cuisine: "Asiatique",
    difficulte: "Moyen",
    saison: "Toutes saisons",
    allergenes: ["Œufs", "Arachides", "Soja", "Poisson"],
    temps: 30,
    portions: 2,
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600&q=80",
    video: "https://www.youtube-nocookie.com/embed/tJ6tfH7hlOo",
    prixParPortion: 3.48,
    prixIngredients: [1.00, 2.80, 0.60, 0.50, 0.25, 0.15, 0.20, 0.10, 0.35, 0.40, 0.50, 0.10],
    ingredients: [
      "200 g de nouilles de riz",
      "300 g de blanc de poulet émincé",
      "2 œufs",
      "100 g de germes de soja",
      "4 c. à soupe de sauce soja",
      "2 c. à soupe de sauce poisson",
      "1 c. à soupe de sucre de palme",
      "2 c. à soupe d'huile d'arachide",
      "2 oignons nouveaux",
      "50 g de cacahuètes concassées",
      "1 citron vert",
      "Piment en flocons"
    ],
    etapes: [
      "Faire tremper les nouilles dans de l'eau chaude 10 minutes, puis égoutter.",
      "Mélanger la sauce soja, la sauce poisson et le sucre dans un bol.",
      "Faire chauffer l'huile dans un wok à feu vif. Faire sauter le poulet 4 minutes.",
      "Pousser le poulet sur le côté, casser les œufs et les brouiller.",
      "Ajouter les nouilles et la sauce. Mélanger vivement.",
      "Incorporer les germes de soja et les oignons nouveaux.",
      "Servir avec les cacahuètes, un quartier de citron vert et du piment."
    ]
  },
  {
    id: 4,
    titre: "Soupe à l'Oignon Gratinée",
    categorie: "Entrée",
    cuisine: "Française",
    difficulte: "Facile",
    saison: "Hiver",
    allergenes: ["Gluten", "Lait", "Sulfites"],
    temps: 55,
    portions: 4,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80",
    video: "https://www.youtube-nocookie.com/embed/r078bSTC1Zs",
    prixParPortion: 1.23,
    prixIngredients: [1.00, 0.40, 0.05, 0.02, 0.60, 0.40, 0.60, 1.80, 0.05],
    ingredients: [
      "1 kg d'oignons",
      "50 g de beurre",
      "1 c. à soupe d'huile",
      "1 c. à café de sucre",
      "150 ml de vin blanc sec",
      "1,2 L de bouillon de bœuf",
      "8 tranches de baguette",
      "150 g de gruyère râpé",
      "Sel & poivre"
    ],
    etapes: [
      "Émincer les oignons. Les faire fondre dans le beurre et l'huile à feu doux 20 minutes.",
      "Ajouter le sucre et cuire encore 10 minutes jusqu'à caramélisation.",
      "Déglacer au vin blanc, laisser réduire 2 minutes.",
      "Verser le bouillon, saler et poivrer. Laisser mijoter 15 minutes.",
      "Griller légèrement les tranches de baguette.",
      "Répartir la soupe dans des bols allant au four. Poser les croûtons dessus.",
      "Couvrir généreusement de gruyère et gratiner 5 minutes sous le grill."
    ]
  },
  {
    id: 5,
    titre: "Pizza Margherita",
    categorie: "Plat principal",
    cuisine: "Italienne",
    difficulte: "Moyen",
    saison: "Toutes saisons",
    allergenes: ["Gluten", "Lait"],
    temps: 90,
    portions: 2,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
    video: "https://www.youtube-nocookie.com/embed/Xm8PH-utNrM",
    prixParPortion: 1.93,
    prixIngredients: [0.30, 0.40, 0.00, 0.01, 0.15, 0.40, 2.00, 0.50, 0.10],
    ingredients: [
      "300 g de farine T00",
      "7 g de levure de boulanger sèche",
      "180 ml d'eau tiède",
      "1 c. à café de sel",
      "1 c. à soupe d'huile d'olive",
      "150 ml de sauce tomate",
      "200 g de mozzarella fraîche",
      "Basilic frais",
      "Fior di sale"
    ],
    etapes: [
      "Dissoudre la levure dans l'eau tiède. Laisser reposer 5 minutes.",
      "Mélanger la farine et le sel. Ajouter l'eau avec la levure et l'huile.",
      "Pétrir 10 minutes jusqu'à obtenir une pâte lisse et élastique.",
      "Laisser lever 1 heure sous un torchon dans un endroit chaud.",
      "Préchauffer le four à 250 °C (four le plus chaud possible).",
      "Étaler la pâte finement sur une plaque farinée.",
      "Étaler la sauce tomate, déposer la mozzarella en morceaux.",
      "Enfourner 8-10 minutes. Garnir de basilic frais et d'un filet d'huile."
    ]
  },
  {
    id: 6,
    titre: "Tacos al Pastor",
    categorie: "Plat principal",
    cuisine: "Mexicaine",
    difficulte: "Difficile",
    saison: "Été",
    allergenes: [],
    temps: 120,
    portions: 6,
    image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=600&q=80",
    video: "https://www.youtube-nocookie.com/embed/JOvLXKU6mB4",
    prixParPortion: 2.82,
    prixIngredients: [8.00, 1.80, 1.20, 2.00, 0.20, 0.10, 0.05, 0.05, 2.00, 1.50],
    ingredients: [
      "1 kg d'épaule de porc en tranches fines",
      "4 piments guajillo séchés",
      "2 piments ancho séchés",
      "1 ananas en tranches",
      "4 gousses d'ail",
      "2 c. à soupe de vinaigre de cidre",
      "1 c. à café de cumin",
      "1 c. à café d'origan",
      "12 tortillas de maïs",
      "Coriandre, oignon blanc, salsa verde"
    ],
    etapes: [
      "Faire tremper les piments séchés dans l'eau chaude 20 minutes.",
      "Mixer les piments réhydratés avec l'ail, le vinaigre, le cumin et l'origan.",
      "Mariner le porc dans cette sauce au moins 2 heures (idéalement une nuit).",
      "Cuire le porc et l'ananas sur une plancha ou à la poêle à feu vif.",
      "Hacher grossièrement la viande et l'ananas.",
      "Réchauffer les tortillas à la poêle sèche.",
      "Garnir chaque tortilla de viande, ananas, oignon, coriandre et salsa verde."
    ]
  },
  {
    id: 7,
    titre: "Crème Brûlée",
    categorie: "Dessert",
    cuisine: "Française",
    difficulte: "Moyen",
    saison: "Toutes saisons",
    allergenes: ["Œufs", "Lait"],
    temps: 50,
    portions: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Creme_brulee.jpg/800px-Creme_brulee.jpg",
    video: "https://www.youtube-nocookie.com/embed/lROX8gJ8SPE",
    prixParPortion: 1.24,
    prixIngredients: [1.50, 1.50, 0.15, 1.80],
    ingredients: [
      "500 ml de crème liquide entière",
      "5 jaunes d'œufs",
      "100 g de sucre + 4 c. à soupe pour la croûte",
      "1 gousse de vanille"
    ],
    etapes: [
      "Préchauffer le four à 160 °C. Fendre la vanille et en extraire les graines.",
      "Dans une casserole, chauffer la crème avec la gousse et les graines de vanille.",
      "Fouetter les jaunes avec 100 g de sucre jusqu'à blanchiment.",
      "Verser la crème chaude (sans la gousse) en filet sur les jaunes en fouettant.",
      "Filtrer et verser dans 4 ramequins. Enfourner au bain-marie 35 minutes.",
      "Laisser refroidir puis réfrigérer 2 heures minimum.",
      "Saupoudrer de sucre et caraméliser au chalumeau au moment de servir."
    ]
  },
  {
    id: 8,
    titre: "Ramen Tonkotsu",
    categorie: "Plat principal",
    cuisine: "Asiatique",
    difficulte: "Difficile",
    saison: "Hiver",
    allergenes: ["Gluten", "Œufs", "Soja", "Sésame"],
    temps: 240,
    portions: 4,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80",
    video: "https://www.youtube-nocookie.com/embed/2fBs5MNlK2s",
    prixParPortion: 2.94,
    prixIngredients: [2.50, 2.50, 2.00, 1.20, 0.30, 0.25, 0.60, 2.00, 0.40],
    ingredients: [
      "1 kg d'os de porc (carcasses)",
      "4 tranches de poitrine de porc",
      "400 g de nouilles ramen fraîches",
      "4 œufs mollets marinés dans la sauce soja",
      "2 c. à soupe de miso blanc",
      "4 c. à soupe de sauce soja",
      "Gingembre, ail, oignons verts",
      "Nori, bambou lacto-fermenté, graines de sésame",
      "Huile de sésame"
    ],
    etapes: [
      "Blanchir les os 5 minutes à l'eau bouillante, rincer soigneusement.",
      "Cuire les os dans 3 L d'eau 3 heures à frémissement constant pour obtenir un bouillon trouble et crémeux.",
      "Assaisonner le bouillon avec le miso, la sauce soja et du gingembre râpé.",
      "Faire braiser la poitrine de porc à la sauce soja 1 heure, puis confectionner des tranches.",
      "Cuire les œufs 6 min 30 s, les refroidir et les mariner dans de la sauce soja diluée.",
      "Cuire les nouilles al dente selon les instructions.",
      "Dresser : nouilles dans un grand bol, bouillon bouillant versé dessus.",
      "Garnir de porc, d'œuf coupé en deux, de nori, de bambou et d'oignons verts."
    ]
  },
  {
    id: 9,
    titre: "Guacamole Frais",
    categorie: "Entrée",
    cuisine: "Mexicaine",
    difficulte: "Facile",
    saison: "Été",
    allergenes: [],
    temps: 10,
    portions: 4,
    image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=600&q=80",
    video: "https://www.youtube-nocookie.com/embed/tHVzFLtvbGQ",
    prixParPortion: 1.13,
    prixIngredients: [2.50, 0.40, 0.20, 0.50, 0.40, 0.50, 0.02],
    ingredients: [
      "3 avocats mûrs",
      "1 tomate",
      "½ oignon rouge",
      "1 citron vert (jus)",
      "1 piment jalapeño",
      "Coriandre fraîche",
      "Sel"
    ],
    etapes: [
      "Couper et dénoyauter les avocats. Écraser la chair à la fourchette.",
      "Ajouter le jus de citron vert immédiatement pour éviter l'oxydation.",
      "Incorporer la tomate épépinée en dés, l'oignon et le jalapeño finement ciselés.",
      "Ajouter la coriandre hachée et saler à votre goût.",
      "Mélanger brièvement (laisser une texture légèrement grossière) et servir avec des tortilla chips."
    ]
  },
  {
    id: 10,
    titre: "Pancakes Américains",
    categorie: "Dessert",
    cuisine: "Américaine",
    difficulte: "Facile",
    saison: "Toutes saisons",
    allergenes: ["Gluten", "Œufs", "Lait"],
    temps: 20,
    portions: 4,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
    video: "https://www.youtube-nocookie.com/embed/PqYNIzv5bCM",
    prixParPortion: 1.01,
    prixIngredients: [0.12, 0.10, 0.02, 0.01, 0.25, 0.30, 0.25, 3.00],
    ingredients: [
      "200 g de farine",
      "2 c. à café de levure chimique",
      "1 c. à soupe de sucre",
      "½ c. à café de sel",
      "240 ml de lait",
      "1 œuf",
      "2 c. à soupe de beurre fondu",
      "Sirop d'érable, fruits rouges"
    ],
    etapes: [
      "Mélanger les ingrédients secs dans un grand bol.",
      "Fouetter le lait, l'œuf et le beurre fondu dans un autre bol.",
      "Verser les liquides sur les sec et mélanger just pour humidifier (quelques grumeaux = normal).",
      "Chauffer une poêle anti-adhésive légèrement beurrée à feu moyen.",
      "Verser une louche de pâte, cuire jusqu'à apparition de bulles (2 min), retourner et cuire 1 min.",
      "Servir avec du sirop d'érable et des fruits rouges frais."
    ]
  },
  {
    id: 11,
    titre: "Limonade au Gingembre",
    categorie: "Boisson",
    cuisine: "Française",
    difficulte: "Facile",
    saison: "Été",
    allergenes: [],
    temps: 15,
    portions: 4,
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&q=80",
    video: "https://www.youtube-nocookie.com/embed/m1BkaXghBkY",
    prixParPortion: 0.72,
    prixIngredients: [1.20, 0.40, 0.08, 0.70, 0.40, 0.10],
    ingredients: [
      "4 citrons jaunes (jus)",
      "4 cm de gingembre frais râpé",
      "80 g de sucre",
      "1 L d'eau gazeuse",
      "Feuilles de menthe",
      "Glaçons"
    ],
    etapes: [
      "Faire un sirop en chauffant le sucre avec 100 ml d'eau et le gingembre 5 minutes. Laisser refroidir.",
      "Filtrer le sirop pour enlever le gingembre.",
      "Dans un grand pichet, mélanger le jus de citron et le sirop de gingembre.",
      "Compléter avec l'eau gazeuse bien froide.",
      "Servir sur des glaçons avec de la menthe fraîche."
    ]
  },
  {
    id: 12,
    titre: "Œufs Cocotte aux Champignons",
    categorie: "Entrée",
    cuisine: "Française",
    difficulte: "Facile",
    saison: "Automne",
    allergenes: ["Œufs", "Lait"],
    temps: 25,
    portions: 2,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80",
    video: "https://www.youtube-nocookie.com/embed/xggYiMAjX3M",
    prixParPortion: 1.85,
    prixIngredients: [1.20, 1.20, 0.50, 0.20, 0.15, 0.40, 0.05],
    ingredients: [
      "4 œufs frais",
      "200 g de champignons de Paris",
      "100 ml de crème fraîche épaisse",
      "1 échalote",
      "20 g de beurre",
      "Ciboulette fraîche",
      "Sel & poivre"
    ],
    etapes: [
      "Préchauffer le four à 180 °C. Émincer les champignons et l'échalote.",
      "Faire revenir l'échalote au beurre, ajouter les champignons. Cuire 5 minutes. Saler.",
      "Beurrer 2 ramequins. Répartir les champignons au fond.",
      "Verser un peu de crème, y casser 2 œufs délicatement.",
      "Ajouter le reste de crème. Poivrer.",
      "Cuire au bain-marie 10-12 minutes (blanc pris, jaune coulant).",
      "Parsemer de ciboulette et servir avec du pain grillé."
    ]
  },
  {
    id: 13,
    titre: "Bœuf Bourguignon",
    categorie: "Plat principal",
    cuisine: "Française",
    difficulte: "Difficile",
    saison: "Hiver",
    allergenes: ["Gluten", "Lait", "Sulfites"],
    temps: 180,
    portions: 6,
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=600&q=80",
    video: "https://www.youtube-nocookie.com/embed/F_53yUD3Je4",
    prixParPortion: 3.76,
    prixIngredients: [13.00, 1.60, 1.20, 0.30, 0.20, 0.20, 5.00, 0.30, 0.02, 0.30, 0.45],
    ingredients: [
      "1,2 kg de bœuf à braiser (paleron ou joue)",
      "200 g de lardons fumés",
      "200 g de champignons de Paris",
      "2 carottes",
      "1 oignon",
      "4 gousses d'ail",
      "75 cl de vin rouge de Bourgogne",
      "30 cl de bouillon de bœuf",
      "2 c. à soupe de farine",
      "Bouquet garni (thym, laurier, persil)",
      "50 g de beurre, sel & poivre"
    ],
    etapes: [
      "Couper le bœuf en gros cubes, saler et poivrer.",
      "Faire dorer les lardons dans une cocotte, réserver. Faire revenir le bœuf en plusieurs fois jusqu'à coloration.",
      "Ajouter l'oignon et les carottes en dés, faire suer 5 minutes.",
      "Singer avec la farine, remuer, puis mouiller avec le vin et le bouillon.",
      "Ajouter l'ail écrasé, le bouquet garni et les lardons. Porter à ébullition.",
      "Couvrir et cuire à feu très doux 2 h 30, jusqu'à ce que la viande soit fondante.",
      "Faire sauter les champignons au beurre et les ajouter 20 minutes avant la fin.",
      "Rectifier l'assaisonnement et servir avec des pommes de terre vapeur ou des pâtes."
    ]
  },
  {
    id: 14,
    titre: "Sushi Rolls Californiens",
    categorie: "Plat principal",
    cuisine: "Asiatique",
    difficulte: "Difficile",
    saison: "Printemps",
    allergenes: ["Gluten", "Crustacés", "Poisson", "Soja", "Sésame"],
    temps: 60,
    portions: 4,
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=80",
    video: "https://www.youtube-nocookie.com/embed/SFDlOZZRM4c",
    prixParPortion: 2.01,
    prixIngredients: [1.80, 0.30, 0.02, 1.50, 1.00, 1.20, 0.40, 0.30, 1.50],
    ingredients: [
      "300 g de riz à sushi",
      "4 c. à soupe de vinaigre de riz",
      "1 c. à soupe de sucre + 1 c. à café de sel",
      "4 feuilles de nori",
      "1 avocat en tranches",
      "200 g de surimi ou crabe",
      "½ concombre en julienne",
      "Graines de sésame",
      "Sauce soja, wasabi, gingembre mariné"
    ],
    etapes: [
      "Rincer le riz jusqu'à ce que l'eau soit claire, cuire selon les instructions.",
      "Mélanger vinaigre, sucre et sel, incorporer délicatement au riz chaud. Laisser refroidir.",
      "Poser une feuille de nori sur une natte en bambou filmée.",
      "Étaler une couche de riz en laissant 2 cm en haut. Retourner le nori côté riz vers le bas.",
      "Déposer avocat, surimi et concombre sur le nori.",
      "Rouler fermement à l'aide de la natte, souder le bord avec un peu d'eau.",
      "Rouler dans les graines de sésame, trancher en 8 morceaux avec un couteau humide.",
      "Servir avec sauce soja, wasabi et gingembre mariné."
    ]
  },
  {
    id: 15,
    titre: "Tarte Tatin",
    categorie: "Dessert",
    cuisine: "Française",
    difficulte: "Moyen",
    saison: "Automne",
    allergenes: ["Gluten", "Lait"],
    temps: 65,
    portions: 6,
    image: "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?w=600&q=80",
    video: "https://www.youtube-nocookie.com/embed/Al7W2wpNyb4",
    prixParPortion: 0.98,
    prixIngredients: [2.00, 0.15, 0.70, 1.40, 0.10, 1.50],
    ingredients: [
      "6 pommes Golden",
      "150 g de sucre",
      "80 g de beurre demi-sel",
      "1 rouleau de pâte feuilletée",
      "1 c. à café de cannelle",
      "Glace vanille (pour servir)"
    ],
    etapes: [
      "Éplucher, épépiner et couper les pommes en quartiers.",
      "Dans un moule à manqué allant au four, faire fondre le beurre à feu moyen.",
      "Ajouter le sucre et laisser caraméliser à feu moyen sans remuer, jusqu'à obtenir un caramel ambré.",
      "Disposer les quartiers de pommes serrés en rosace sur le caramel. Saupoudrer de cannelle.",
      "Cuire à feu doux 10 minutes pour précuire les pommes.",
      "Recouvrir avec la pâte feuilletée en rentrant les bords sous les pommes.",
      "Enfourner à 200 °C pendant 25 minutes jusqu'à ce que la pâte soit dorée.",
      "Laisser reposer 5 minutes, retourner sur un plat et servir tiède avec de la glace."
    ]
  },
  {
    id: 16,
    titre: "Curry de Poulet au Lait de Coco",
    categorie: "Plat principal",
    cuisine: "Asiatique",
    difficulte: "Facile",
    saison: "Hiver",
    allergenes: ["Poisson"],
    temps: 35,
    portions: 4,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80",
    video: "https://www.youtube-nocookie.com/embed/jDUfB1WNkSs",
    prixParPortion: 2.71,
    prixIngredients: [6.00, 1.40, 0.50, 0.80, 0.20, 0.15, 0.20, 0.10, 0.10, 0.20, 1.20],
    ingredients: [
      "700 g de blanc de poulet en cubes",
      "400 ml de lait de coco",
      "2 c. à soupe de pâte de curry rouge",
      "1 poivron rouge",
      "1 oignon",
      "3 gousses d'ail",
      "2 cm de gingembre frais",
      "1 c. à soupe d'huile de coco",
      "1 c. à soupe de sauce poisson",
      "1 c. à café de sucre de palme",
      "Basilic thaï, riz jasmin"
    ],
    etapes: [
      "Faire chauffer l'huile de coco dans un wok. Faire revenir l'oignon 3 minutes.",
      "Ajouter l'ail et le gingembre râpés, puis la pâte de curry. Faire revenir 1 minute.",
      "Incorporer le poulet et faire dorer 4 minutes.",
      "Verser le lait de coco, la sauce poisson et le sucre. Mélanger.",
      "Ajouter le poivron en lanières et laisser mijoter 15 minutes à feu moyen.",
      "Ajuster l'assaisonnement et parsemer de basilic thaï. Servir avec du riz jasmin."
    ]
  },
  {
    id: 17,
    titre: "Gaspacho Andalou",
    categorie: "Entrée",
    cuisine: "Française",
    difficulte: "Facile",
    saison: "Été",
    allergenes: [],
    temps: 15,
    portions: 4,
    image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=600&q=80",
    video: "https://www.youtube-nocookie.com/embed/BTkHdI9ZCJE",
    prixParPortion: 1.08,
    prixIngredients: [1.60, 0.80, 0.80, 0.05, 0.20, 0.40, 0.30, 0.15],
    ingredients: [
      "800 g de tomates bien mûres",
      "1 concombre",
      "1 poivron rouge",
      "1 gousse d'ail",
      "½ oignon rouge",
      "4 c. à soupe d'huile d'olive",
      "2 c. à soupe de vinaigre de Xérès",
      "Sel, poivre, pain rassis (optionnel)"
    ],
    etapes: [
      "Couper les légumes en morceaux grossiers.",
      "Mixer longuement tous les légumes avec l'huile, le vinaigre, l'ail, sel et poivre.",
      "Passer au tamis fin pour une texture veloutée.",
      "Réfrigérer au moins 2 heures avant de servir.",
      "Servir très frais avec une garniture de dés de concombre, poivron et croûtons."
    ]
  },
  {
    id: 18,
    titre: "Risotto aux Champignons Sauvages",
    categorie: "Plat principal",
    cuisine: "Italienne",
    difficulte: "Moyen",
    saison: "Automne",
    allergenes: ["Lait", "Sulfites"],
    temps: 40,
    portions: 4,
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80",
    video: "https://www.youtube-nocookie.com/embed/sM2W2x1BVIM",
    prixParPortion: 2.99,
    prixIngredients: [1.50, 6.00, 0.40, 0.80, 0.20, 0.10, 1.80, 0.40, 0.45, 0.30],
    ingredients: [
      "320 g de riz Arborio",
      "300 g de champignons sauvages (cèpes, girolles)",
      "1 L de bouillon de légumes chaud",
      "1 verre de vin blanc sec",
      "1 échalote",
      "2 gousses d'ail",
      "60 g de parmesan râpé",
      "50 g de beurre",
      "3 c. à soupe d'huile d'olive",
      "Persil plat, sel & poivre"
    ],
    etapes: [
      "Faire revenir les champignons à l'huile d'olive, saler. Réserver.",
      "Dans la même poêle, faire suer l'échalote et l'ail dans un peu de beurre.",
      "Ajouter le riz et faire nacrer 2 minutes en remuant.",
      "Déglacer au vin blanc et laisser absorber en remuant.",
      "Ajouter le bouillon louche par louche en remuant constamment pendant 18 minutes.",
      "Incorporer les champignons, le reste de beurre et le parmesan.",
      "Couvrir, laisser reposer 2 minutes. Parsemer de persil et servir."
    ]
  },
  {
    id: 19,
    titre: "Burger Maison",
    categorie: "Plat principal",
    cuisine: "Américaine",
    difficulte: "Facile",
    saison: "Été",
    allergenes: ["Gluten", "Lait", "Moutarde"],
    temps: 25,
    portions: 4,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    video: "https://www.youtube-nocookie.com/embed/LuL_80fItaw",
    prixParPortion: 2.86,
    prixIngredients: [5.50, 2.00, 1.20, 0.30, 0.60, 0.30, 1.50, 0.05],
    ingredients: [
      "600 g de bœuf haché (15 % MG)",
      "4 buns briochés",
      "4 tranches de cheddar",
      "4 feuilles de laitue",
      "2 tomates en tranches",
      "1 oignon rouge",
      "Cornichons, ketchup, moutarde, mayo",
      "Sel & poivre"
    ],
    etapes: [
      "Façonner 4 steaks avec le bœuf haché. Assaisonner généreusement.",
      "Chauffer une poêle en fonte à feu vif. Cuire les steaks 2 min de chaque côté.",
      "Déposer le cheddar sur chaque steak, couvrir 30 secondes pour le faire fondre.",
      "Toaster les buns au beurre dans la même poêle.",
      "Tartiner le pain de ketchup, mayo et moutarde.",
      "Garnir de laitue, tomate, steak, oignon et cornichons. Servir immédiatement."
    ]
  },
  {
    id: 20,
    titre: "Moelleux au Chocolat",
    categorie: "Dessert",
    cuisine: "Française",
    difficulte: "Facile",
    saison: "Hiver",
    allergenes: ["Gluten", "Œufs", "Lait"],
    temps: 20,
    portions: 6,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    video: "https://www.youtube-nocookie.com/embed/qN6bSCFrhpU",
    prixParPortion: 0.82,
    prixIngredients: [2.20, 1.20, 0.15, 1.20, 0.04, 0.10],
    ingredients: [
      "200 g de chocolat noir 70 %",
      "150 g de beurre",
      "150 g de sucre",
      "4 œufs",
      "60 g de farine",
      "1 pincée de fleur de sel"
    ],
    etapes: [
      "Préchauffer le four à 200 °C. Beurrer et fariner 6 ramequins.",
      "Faire fondre le chocolat et le beurre au bain-marie. Lisser.",
      "Fouetter les œufs et le sucre jusqu'à ce que le mélange double de volume.",
      "Incorporer le chocolat fondu, puis la farine tamisée. Mélanger délicatement.",
      "Verser dans les ramequins aux ¾. Enfourner 10-12 minutes.",
      "Le centre doit rester tremblotant. Démouler et servir aussitôt avec une quenelle de glace vanille."
    ]
  },
  {
    id: 21,
    titre: "Enchiladas au Poulet",
    categorie: "Plat principal",
    cuisine: "Mexicaine",
    difficulte: "Moyen",
    saison: "Toutes saisons",
    allergenes: ["Lait"],
    temps: 50,
    portions: 4,
    image: "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?w=600&q=80",
    video: "https://www.youtube-nocookie.com/embed/8u2_RmrkD_g",
    prixParPortion: 3.18,
    prixIngredients: [4.50, 1.50, 2.50, 1.50, 0.30, 0.10, 0.80, 1.50],
    ingredients: [
      "500 g de poulet effiloché cuit",
      "8 tortillas de maïs",
      "400 ml de sauce enchilada rouge",
      "200 g de fromage mexicain ou mozzarella râpé",
      "1 oignon rouge",
      "2 gousses d'ail",
      "200 g de haricots noirs cuits",
      "Crème fraîche, coriandre, citron vert"
    ],
    etapes: [
      "Préchauffer le four à 190 °C.",
      "Mélanger le poulet effiloché, les haricots, l'oignon et l'ail ciselés.",
      "Tremper chaque tortilla dans la sauce enchilada quelques secondes.",
      "Garnir le centre de chaque tortilla et rouler. Placer dans un plat à gratin, joint en dessous.",
      "Verser le reste de sauce sur les enchiladas. Recouvrir de fromage.",
      "Enfourner 20 minutes jusqu'à ce que le fromage soit doré et bouillonnant.",
      "Garnir de crème fraîche, coriandre et jus de citron vert."
    ]
  },
  {
    id: 22,
    titre: "Velouté de Butternut",
    categorie: "Entrée",
    cuisine: "Française",
    difficulte: "Facile",
    saison: "Automne",
    allergenes: [],
    temps: 40,
    portions: 4,
    image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&q=80",
    video: "https://www.youtube-nocookie.com/embed/gM39CnH-T4U",
    prixParPortion: 1.09,
    prixIngredients: [1.80, 0.20, 0.10, 0.40, 0.90, 0.10, 0.05, 0.20, 0.60],
    ingredients: [
      "1 butternut (environ 1 kg)",
      "1 oignon",
      "2 gousses d'ail",
      "80 cl de bouillon de légumes",
      "200 ml de crème de coco",
      "1 c. à café de curry doux",
      "½ c. à café de cumin",
      "2 c. à soupe d'huile d'olive",
      "Graines de courge, sel & poivre"
    ],
    etapes: [
      "Peler et couper la butternut en dés. Émincer l'oignon.",
      "Faire revenir l'oignon et l'ail dans l'huile d'olive 4 minutes.",
      "Ajouter la butternut, le curry et le cumin. Faire revenir 3 minutes.",
      "Verser le bouillon, porter à ébullition et cuire 20 minutes.",
      "Mixer finement et incorporer la crème de coco. Rectifier l'assaisonnement.",
      "Servir avec des graines de courge grillées et un filet de crème."
    ]
  },
  {
    id: 23,
    titre: "Cheesecake New-Yorkais",
    categorie: "Dessert",
    cuisine: "Américaine",
    difficulte: "Moyen",
    saison: "Printemps",
    allergenes: ["Gluten", "Œufs", "Lait"],
    temps: 90,
    portions: 8,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80",
    video: "https://www.youtube-nocookie.com/embed/tspdJ6hxqnc",
    prixParPortion: 1.39,
    prixIngredients: [1.20, 0.65, 5.00, 0.20, 0.90, 0.80, 0.30, 0.05, 2.00],
    ingredients: [
      "200 g de biscuits Graham ou Digestive",
      "80 g de beurre fondu",
      "600 g de cream cheese",
      "200 g de sucre",
      "3 œufs",
      "200 ml de crème fraîche épaisse",
      "1 c. à café de vanille",
      "1 c. à soupe de fécule de maïs",
      "Coulis de fruits rouges"
    ],
    etapes: [
      "Préchauffer le four à 160 °C. Tapisser un moule à charnière de papier cuisson.",
      "Mixer les biscuits en poudre fine. Mélanger au beurre fondu et tasser dans le moule. Réfrigérer.",
      "Fouetter le cream cheese et le sucre jusqu'à consistance lisse.",
      "Ajouter les œufs un à un, puis la crème, la vanille et la fécule.",
      "Verser sur la base biscuitée. Cuire au bain-marie 60 minutes.",
      "Éteindre le four et laisser la porte entrouverte 30 minutes. Laisser refroidir puis réfrigérer 4 heures.",
      "Démouler et servir avec un coulis de fruits rouges."
    ]
  },
  {
    id: 24,
    titre: "Smoothie Tropical",
    categorie: "Boisson",
    cuisine: "Américaine",
    difficulte: "Facile",
    saison: "Été",
    allergenes: [],
    temps: 5,
    portions: 2,
    image: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=600&q=80",
    video: "https://www.youtube-nocookie.com/embed/ILoKhF6oq34",
    prixParPortion: 2.10,
    prixIngredients: [1.80, 0.80, 0.20, 0.90, 0.30, 0.15, 0.05],
    ingredients: [
      "1 mangue mûre pelée",
      "200 g d'ananas en morceaux",
      "1 banane",
      "200 ml de lait de coco",
      "100 ml de jus d'orange frais",
      "1 c. à soupe de miel",
      "Glaçons"
    ],
    etapes: [
      "Peler et couper tous les fruits en morceaux.",
      "Placer les fruits, le lait de coco, le jus d'orange, le miel et les glaçons dans un blender.",
      "Mixer à pleine puissance 1 minute jusqu'à consistance lisse et crémeuse.",
      "Verser dans des grands verres et servir immédiatement avec une paille."
    ]
  },
  {
    id: 25,
    titre: "Croissants Maison",
    categorie: "Dessert",
    cuisine: "Française",
    difficulte: "Difficile",
    saison: "Toutes saisons",
    allergenes: ["Gluten", "Lait", "Œufs"],
    temps: 720,
    portions: 12,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
    video: "https://www.youtube-nocookie.com/embed/lvziedA2J3I",
    prixParPortion: 0.62,
    prixIngredients: [0.45, 0.10, 0.08, 0.06, 0.30, 0.60, 3.20, 0.15, 0.10, 0.05],
    ingredients: [
      "500 g de farine de gruau T45 (ou T55)",
      "10 g de sel fin",
      "80 g de sucre en poudre",
      "10 g de levure de boulanger fraîche (ou 5 g sèche)",
      "300 ml de lait entier froid",
      "30 g de beurre fondu (pour la détrempe)",
      "280 g de beurre de tourage AOP 84 % MG (bien froid)",
      "2 jaunes d'œufs",
      "2 c. à soupe de lait (pour la dorure)",
      "1 pincée de sel (pour la dorure)"
    ],
    etapes: [
      "— JOUR 1 — Préparer la détrempe : dissoudre la levure dans le lait froid pendant 5 minutes.",
      "Dans le bol du robot (crochet), mélanger la farine, le sel et le sucre. Creuser un puits, verser le lait avec la levure et le beurre fondu.",
      "Pétrir à vitesse 2 pendant 4 minutes, juste pour amalgamer la pâte — ne pas développer le gluten à l'excès (la pâte doit rester légèrement collante et peu élastique).",
      "Former une boule, l'aplatir légèrement en rectangle, filmer au contact et réfrigérer 12 h minimum (idéalement une nuit entière).",
      "— JOUR 2, MATIN — Sortir le beurre de tourage. Le placer entre deux feuilles de papier cuisson et le taper au rouleau pour former un carré de 20 × 20 cm, uniforme en épaisseur. Il doit être plastique mais froid (15 °C idéal). Réserver au frais si nécessaire.",
      "Sortir la détrempe du réfrigérateur. Sur un plan légèrement fariné, l'abaisser en un rectangle d'environ 40 × 22 cm.",
      "Poser le carré de beurre au centre. Rabattre les deux extrémités de pâte vers le milieu de façon à enfermer le beurre hermétiquement — bien souder les bords en pinçant.",
      "PREMIER TOUR DOUBLE : abaisser délicatement le pâton en un rectangle de 60 × 22 cm en appuyant régulièrement (ne pas rouler trop vite pour éviter de percer). Plier en portefeuille : ramener le bas au tiers supérieur, puis replier le haut par-dessus (4 couches). Filmer et réfrigérer 30 minutes.",
      "DEUXIÈME TOUR DOUBLE : répéter l'opération — abaisser en 60 × 22 cm, plier en portefeuille. Marquer deux empreintes de doigts pour mémoriser les tours effectués. Filmer et réfrigérer 30 minutes.",
      "TROISIÈME TOUR SIMPLE : abaisser en 60 × 22 cm, plier en trois (comme une lettre). Filmer et réfrigérer au moins 1 h (ou jusqu'au lendemain).",
      "— FAÇONNAGE — Abaisser la pâte en un grand rectangle de 40 × 60 cm et 3–4 mm d'épaisseur. Couper des triangles isocèles d'environ 10 cm de base et 20 cm de hauteur à l'aide d'un couteau bien tranchant.",
      "Pratiquer une petite entaille de 1 cm à la base de chaque triangle. Étirer délicatement la pointe, puis rouler chaque triangle depuis la base vers la pointe, en maintenant une légère tension. Courber légèrement les extrémités vers l'intérieur pour former la forme caractéristique en croissant.",
      "Déposer les croissants sur deux plaques recouvertes de papier cuisson, en les espaçant d'au moins 5 cm. Ils ne doivent pas se toucher.",
      "— POUSSE — Laisser lever à température ambiante (22–24 °C) pendant 2 h à 2 h 30 : les croissants doivent avoir gonflé d'environ 50 % et trembler légèrement quand on secoue la plaque. Ne pas laisser pousser dans un endroit trop chaud (le beurre fondrait).",
      "Préchauffer le four à 190 °C chaleur tournante (ou 200 °C sole/voûte) avec la lèchefrite en position basse.",
      "— DORURE — Mélanger les jaunes d'œufs, le lait et la pincée de sel. Avec un pinceau souple, dorer délicatement le dessus et les côtés des croissants, en évitant de faire couler la dorure sur les feuillets (cela collerait les couches).",
      "Enfourner 14–16 minutes jusqu'à coloration dorée acajou profond et uniforme. Surveiller à partir de 12 minutes car chaque four est différent.",
      "Sortir du four et laisser reposer 10 minutes sur une grille avant de déguster — l'intérieur alvéolé et feuilleté révèle sa structure en refroidissant légèrement."
    ]
  }
];

// ─────────────────────────────────────────────────────
// ÉTAT DE L'APPLICATION
// ─────────────────────────────────────────────────────
const state = {
  search: "",
  filters: {
    categorie: "all",
    cuisine:   "all",
    difficulte:"all",
    temps:     "all",
    saison:    "all"
  }
};

const SEO_BASE_URL = "https://saveursdumonde.leofranz.fr";

function upsertJsonLd(id, data) {
  let node = document.getElementById(id);
  if (!node) {
    node = document.createElement("script");
    node.type = "application/ld+json";
    node.id = id;
    document.head.appendChild(node);
  }
  node.textContent = JSON.stringify(data);
}

function updateListingSeo(filteredRecipes) {
  if (!document.getElementById("recipeGrid")) return;

  const activeFilters = Object.entries(state.filters).filter(([, value]) => value !== "all");
  const hasSearch = state.search.trim().length > 0;
  const hasSeoFilter = hasSearch || activeFilters.length > 0;

  const filterLabels = activeFilters.map(([key, value]) => {
    if (FILTER_LABELS[key] && FILTER_LABELS[key].map && FILTER_LABELS[key].map[value]) {
      return FILTER_LABELS[key].map[value];
    }
    return value;
  });

  const titleParts = [];
  if (filterLabels.length > 0) titleParts.push(filterLabels.join(" • "));
  if (hasSearch) titleParts.push(`recherche: ${state.search.trim()}`);

  document.title = titleParts.length > 0
    ? `Recettes ${titleParts.join(" | ")} | Saveurs du Monde`
    : "Recettes du monde | Saveurs du Monde";

  const description = titleParts.length > 0
    ? `${filteredRecipes.length} recette${filteredRecipes.length > 1 ? "s" : ""} trouvee${filteredRecipes.length > 1 ? "s" : ""} pour ${titleParts.join(", ")}.`
    : "Consultez toutes nos recettes du monde: entrees, plats, desserts et boissons avec filtres par cuisine, saison et difficulte.";

  const descMeta = document.getElementById("seoDescription") || document.querySelector('meta[name="description"]');
  if (descMeta) descMeta.setAttribute("content", description);

  const robotsMeta = document.getElementById("seoRobots") || document.querySelector('meta[name="robots"]');
  if (robotsMeta) robotsMeta.setAttribute("content", hasSeoFilter ? "noindex, follow" : "index, follow");

  const canonical = document.getElementById("canonicalLink") || document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute("href", `${SEO_BASE_URL}/pages/recettes.html`);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", document.title);

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute("content", description);

  upsertJsonLd("recipesJsonLd", {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Liste des recettes Saveurs du Monde",
    "itemListElement": filteredRecipes.slice(0, 50).map((recipe, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `${SEO_BASE_URL}/pages/recette.html?id=${recipe.id}`,
      "name": recipe.titre
    }))
  });
}

// ─────────────────────────────────────────────────────
// UTILITAIRES
// ─────────────────────────────────────────────────────
function getTempsCategory(minutes) {
  if (minutes < 30)  return "rapide";
  if (minutes <= 60) return "moyen";
  return "long";
}

function formatTemps(minutes) {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h} h ${m} min` : `${h} h`;
}

function getDifficulteClass(d) {
  const map = { Facile: "facile", Moyen: "moyen", Difficile: "difficile" };
  return map[d] || "";
}

function getSaisonClass(s) {
  const map = { "Printemps": "saison-printemps", "Été": "saison-ete", "Automne": "saison-automne", "Hiver": "saison-hiver", "Toutes saisons": "saison-toutes" };
  return map[s] || "";
}

// ─────────────────────────────────────────────────────
// RENDU DES CARTES
// ─────────────────────────────────────────────────────
function getLowResImageUrl(imageUrl) {
  if (!imageUrl) return imageUrl;

  // Unsplash : réduire largeur/qualité pour le premier rendu.
  if (imageUrl.includes("images.unsplash.com")) {
    return imageUrl
      .replace(/([?&])w=\d+/i, "$1w=240")
      .replace(/([?&])q=\d+/i, "$1q=35");
  }

  // Wikimedia : utiliser une vignette plus petite quand l'URL est au format /XXXpx-...
  if (imageUrl.includes("upload.wikimedia.org")) {
    return imageUrl.replace(/\/\d+px-/i, "/240px-");
  }

  return imageUrl;
}

function renderCards(recipes) {
  const grid = document.getElementById("recipeGrid");
  const noResults = document.getElementById("noResults");
  const count = document.getElementById("resultsCount");

  grid.innerHTML = "";

  if (recipes.length === 0) {
    noResults.classList.remove("hidden");
    count.textContent = "";
    return;
  }

  noResults.classList.add("hidden");
  count.textContent = `${recipes.length} recette${recipes.length > 1 ? "s" : ""} trouvée${recipes.length > 1 ? "s" : ""}`;

  recipes.forEach(recipe => {
    const lowResImage = getLowResImageUrl(recipe.image);
    const card = document.createElement("article");
    card.className = "recipe-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Voir la recette : ${recipe.titre}`);

    card.innerHTML = `
      <img src="${lowResImage}" data-hd-src="${recipe.image}" alt="${recipe.titre}" loading="lazy" decoding="async" />
      <div class="card-body">
        <div class="card-tags">
          <span class="tag tag-categorie">${recipe.categorie}</span>
          <span class="tag tag-cuisine">${recipe.cuisine}</span>
          <span class="tag tag-difficulte ${getDifficulteClass(recipe.difficulte)}">${recipe.difficulte}</span>
          <span class="tag tag-saison ${getSaisonClass(recipe.saison)}">${recipe.saison}</span>
        </div>
        <h2 class="card-title">${recipe.titre}</h2>
        <div class="card-meta">
          <span>⏱ ${formatTemps(recipe.temps)}</span>
          <span>👤 ${recipe.portions} pers.</span>
        </div>
        ${recipe.allergenes && recipe.allergenes.length > 0 ? `<div class="card-allergenes"><span class="allergenes-badge-sm">⚠️ Allergènes</span></div>` : ''}
      </div>
    `;

    const cardImage = card.querySelector("img[data-hd-src]");
    if (cardImage) {
      // Premier clic sur l'image = chargement HD, sans ouvrir la modal.
      cardImage.addEventListener("click", event => {
        if (cardImage.dataset.hdLoaded === "1") return;
        event.stopPropagation();
      });
    }

    card.addEventListener("click", () => openModal(recipe));
    card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") openModal(recipe); });

    grid.appendChild(card);
  });

  if (typeof window.initClickToHdMedia === "function") {
    window.initClickToHdMedia(grid);
  }
}

// ─────────────────────────────────────────────────────
// FILTRAGE
// ─────────────────────────────────────────────────────
function applyFilters() {
  const q = state.search.toLowerCase().trim();

  const filtered = RECIPES.filter(r => {
    // Recherche textuelle
    if (q && !r.titre.toLowerCase().includes(q) &&
             !r.categorie.toLowerCase().includes(q) &&
             !r.cuisine.toLowerCase().includes(q)) return false;

    // Filtres par menu
    if (state.filters.categorie  !== "all" && r.categorie  !== state.filters.categorie)  return false;
    if (state.filters.cuisine    !== "all" && r.cuisine    !== state.filters.cuisine)    return false;
    if (state.filters.difficulte !== "all" && r.difficulte !== state.filters.difficulte) return false;
    if (state.filters.temps      !== "all" && getTempsCategory(r.temps) !== state.filters.temps) return false;
    if (state.filters.saison     !== "all" && r.saison !== state.filters.saison) return false;

    return true;
  });

  renderCards(filtered);
  renderActiveFilters();
  updateListingSeo(filtered);
}

// ─────────────────────────────────────────────────────
// TAGS DE FILTRES ACTIFS
// ─────────────────────────────────────────────────────
const FILTER_LABELS = {
  categorie:  { label: "Catégorie" },
  cuisine:    { label: "Cuisine" },
  difficulte: { label: "Difficulté" },
  temps:      { label: "Temps", map: { rapide: "< 30 min", moyen: "30–60 min", long: "> 1 h" } },
  saison:     { label: "Saison" }
};

function renderActiveFilters() {
  const container = document.getElementById("activeFilters");
  container.innerHTML = "";

  Object.entries(state.filters).forEach(([key, value]) => {
    if (value === "all") return;

    const meta = FILTER_LABELS[key];
    const displayValue = meta.map ? meta.map[value] : value;

    const tag = document.createElement("span");
    tag.className = "filter-tag";
    tag.innerHTML = `${meta.label} : <strong>${displayValue}</strong>
      <button aria-label="Supprimer le filtre ${meta.label}">✕</button>`;

    tag.querySelector("button").addEventListener("click", () => {
      state.filters[key] = "all";
      // Désactiver la classe active dans le menu
      document.querySelectorAll(`[data-filter="${key}"]`).forEach(a => a.classList.remove("active-filter"));
      document.querySelector(`[data-filter="${key}"][data-value="all"]`)?.classList.add("active-filter");
      applyFilters();
    });

    container.appendChild(tag);
  });
}

// ─────────────────────────────────────────────────────
// MODAL
// ─────────────────────────────────────────────────────
const modal = document.getElementById("modal");

function openModal(recipe) {
  if (!modal) return;

  const modalImg = document.getElementById("modalImg");
  modalImg.src = recipe.image;
  modalImg.alt = recipe.titre;
  modalImg.loading = "eager";
  modalImg.decoding = "async";
  document.getElementById("modalTitle").textContent = recipe.titre;

  // Bouton "Détails" → page dédiée
  const isPages = window.location.pathname.includes('/pages/');
  const detailUrl = (isPages ? '' : 'pages/') + `recette.html?id=${recipe.id}`;
  document.getElementById("modalDetailsBtn").href = detailUrl;

  document.getElementById("modalTags").innerHTML = `
    <span class="tag tag-categorie">${recipe.categorie}</span>
    <span class="tag tag-cuisine">${recipe.cuisine}</span>
    <span class="tag tag-difficulte ${getDifficulteClass(recipe.difficulte)}">${recipe.difficulte}</span>
    <span class="tag tag-saison ${getSaisonClass(recipe.saison)}">${recipe.saison}</span>
  `;

  document.getElementById("modalMeta").innerHTML = `
    <span>⏱ ${formatTemps(recipe.temps)}</span>
    <span>👤 ${recipe.portions} personnes</span>
  `;

  const modalAllergenesEl = document.getElementById("modalAllergenes");
  if (modalAllergenesEl) {
    if (recipe.allergenes && recipe.allergenes.length > 0) {
      modalAllergenesEl.innerHTML = `
        <div class="allergenes-badge">
          <span class="allergenes-badge-icon">⚠️</span>
          <span>Allergènes : <strong>${recipe.allergenes.join(', ')}</strong></span>
        </div>`;
    } else {
      modalAllergenesEl.innerHTML = '';
    }
  }

  const ingList = document.getElementById("modalIngredients");
  ingList.innerHTML = recipe.ingredients.map(i => `<li>${i}</li>`).join("");

  const stepList = document.getElementById("modalSteps");
  stepList.innerHTML = recipe.etapes.map(s => `<li>${s}</li>`).join("");

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}

function closeModal() {
  if (!modal) return;
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

document.getElementById("modalClose")?.addEventListener("click", closeModal);

modal?.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

// ─────────────────────────────────────────────────────
// MENUS DÉROULANTS
// ─────────────────────────────────────────────────────
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {
  const btn = item.querySelector(".nav-btn");

  btn.addEventListener("click", e => {
    e.stopPropagation();
    const isOpen = item.classList.contains("open");
    // Fermer tous les menus
    navItems.forEach(i => i.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });
});

// Clic en dehors → fermer les menus
document.addEventListener("click", () => {
  navItems.forEach(i => i.classList.remove("open"));
});

// ─────────────────────────────────────────────────────
// LIENS DES FILTRES DANS LES MENUS DÉROULANTS
// ─────────────────────────────────────────────────────
document.querySelectorAll(".dropdown a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const filterKey = link.dataset.filter;
    const filterVal = link.dataset.value;

    state.filters[filterKey] = filterVal;

    // Mise à jour visuelle des liens actifs
    document.querySelectorAll(`[data-filter="${filterKey}"]`)
      .forEach(a => a.classList.remove("active-filter"));
    link.classList.add("active-filter");

    // Fermer le menu
    navItems.forEach(i => i.classList.remove("open"));

    applyFilters();
  });
});

// ─────────────────────────────────────────────────────
// BARRE DE RECHERCHE
// ─────────────────────────────────────────────────────
const searchInput = document.getElementById("searchInput");
const searchBtn   = document.getElementById("searchBtn");

if (searchInput && searchBtn) {
  function handleSearch() {
    state.search = searchInput.value;
    applyFilters();
  }

  searchInput.addEventListener("input", handleSearch);
  searchBtn.addEventListener("click", handleSearch);

  searchInput.addEventListener("keydown", e => {
    if (e.key === "Enter") handleSearch();
  });
}

// ─────────────────────────────────────────────────────
// INITIALISATION
// ─────────────────────────────────────────────────────
initLazyBackgrounds();

if (document.getElementById("recipeGrid")) {
  applyFilters();
  document.querySelectorAll("[data-value='all']").forEach(a => a.classList.add("active-filter"));
}

