// data.js
export const categoriesData = [
  {
    id: 1,
    categoryHeader: "Einnahmen",
    percentageText: "80%",
    circleColor: "#9933FF",
    image: "https://cdn-icons-png.freepik.com/512/7458/7458229.png",
    details: [
        { id: 1, source: "Gehalt", amount: "1048 €" },
        { id: 2, source: "Stipendium", amount: "1054 €" },
        { id: 3, source: "Sonstige", amount: "12 €" },
        ],
    detailsTextColor: "#9933FF",
  },
  {
    id: 2,
    categoryHeader: "Ausgaben",
    percentageText: "50%",
    circleColor: "#FF00FF",
    image: "https://cdn-icons-png.freepik.com/512/10166/10166877.png",
    details: [
        { id: 1, source: "Miete", amount: "625 €" },
        { id: 2, source: "Konsum", amount: "450 €" },
        { id: 3, source: "Restliche", amount: "216 €" },
        ],
    detailsTextColor: "#FF00FF",
  },
  {
    id: 3,
    categoryHeader: "Investitionen",
    percentageText: "70%",
    circleColor: "#ff2f87",
    image: "https://cdn-icons-png.freepik.com/512/12513/12513960.png",
    details: [
        { id: 1, source: "ETF", amount: "500 €" },
        { id: 2, source: "Krypto-Index", amount: "40 €" },
        { id: 3, source: "Kryptowährungen", amount: "0 €" },
        ],
    detailsTextColor: "#ff2f87",
  },
  {
    id: 4,
    categoryHeader: "Konsum",
    percentageText: "60%",
    circleColor: "#fe4d41",
    image: "https://cdn-icons-png.flaticon.com/512/1962/1962922.png",
    details: [
        { id: 1, source: "Lebensmittel, Drogerie", amount: "250 €" },
        { id: 2, source: "Kleidung", amount: "100 €" },
        { id: 3, source: "Bar, Restaurant", amount: "100 €" },
        ],
    detailsTextColor: "#fe4d41",
  },
  {
    id: 5,
    categoryHeader: "Überschuss",
    percentageText: "40%",
    circleColor: "#FF8000",
    image: "https://cdn-icons-png.flaticon.com/512/2786/2786448.png",
    details: [
        { id: 1, source: "Auf Konto lassen", amount: "200 €" },
        { id: 2, source: "Investieren", amount: "100 €" },
        { id: 3, source: "Urlaub", amount: "100 €" },
        ],
    detailsTextColor: "#FF8000",
  },
];
