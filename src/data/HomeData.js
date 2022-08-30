import simon from "../assets/Simon.png";

const HomeData = [
  {
    id: 0,
    title: "A propos",
    img: simon,
    alt: "Simon le propriétaire du Montecito pose devant le bar",
    description:
      "Le Montecito est un bar gay-friendly, spécialisé dans la confection de cocktails. Simon, le patron vous y accueille tous les jours de la semaine sans exception.",
    link: "",
  },
  {
    id: 1,
    title: "Notre carte",
    img: "https://media2.giphy.com/media/woq6NIyY0IpoI/giphy.gif?cid=790b7611472efe65a9d6919f2c5c70b190a1517291c79ecd&rid=giphy.gif&ct=g",
    alt: "cocktail joli qui tourne sur lui-même",
    description:
      "En plus de ses 32 cocktails à la carte, Simon vous propose également des cocktails sur-mesure, un vaste choix de vins, de spiritueux, de bières et pour les gourmands, des saucissons, du fromage ou des planches apéritives mixtes.",
    button: "Voir la carte",
    link: "/Carte",
  },
  {
    id: 2,
    title: "Nos soirées",
    img: "https://media1.giphy.com/media/1fPogKALBII0OFpxHj/giphy.gif?cid=ecf05e47mcch6d73j8ceznpgbxnhmhfk0hearjbt80axt3an&rid=giphy.gif&ct=g",
    alt: "boules disco qui tourne et éclaire la piste",
    description:
      "Chaque mois, l'équipe y organise des soirées à thème (DJ , Scènes ouvertes , Cabaret transformiste, etc). Mais le rendez-vous à ne surtout pas manquer, c'est le loto bingo présenté par notre artiste transformiste incontournable des nuits nantaises : Pamela Kay.",
    button: "Voir les soirées",
    link: "/Evenements",
  },
  {
    id: 3,
    title: "Nous contacter",
    img: "https://media1.giphy.com/media/Nc1d6apaHowmY/giphy.gif?cid=ecf05e47d16yllx1hoqt7vuv616arifozelqxcwlzsoo3if8&rid=giphy.gif&ct=g",
    alt: "Téléphone rétro qui compose un numéro",
    description:
      "Vous pouvez nous joindre par téléphone ou directement via notre réseaux sociaux, Facebook ou Instagram. Nous répondons généralement dans la journée. N'hésitez pas d'ailleurs à nous tager dans vos stories.",
    button: "Nous contacter",
    link: "/Contact",
  },
];

export default HomeData;
