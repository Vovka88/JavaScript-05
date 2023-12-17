const database = [
  {
    name: "Сервоприводи",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.",
    price: 2000,
    available: true,
    onSale: true,
  },
  {
    name: "Генератор поля",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.",
    price: 3000,
    available: false,
    onSale: false,
  },
  {
    name: "Біполярний елемент",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.",
    price: 1500,
    available: true,
    onSale: false,
  },
  {
    name: "Титаніум",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.",
    price: 2500,
    available: false,
    onSale: false,
  },
];

const productsEl = document.querySelector(".js-products");

const makeCard = ({ name, description, price, available }) => {
  const cardEl = document.createElement("div");
  const h1El = document.createElement("h1");
  const descriptionEl = document.createElement("p");
  const priceEl = document.createElement("p");

  h1El.textContent = name;
  descriptionEl.textContent = description;
  priceEl.textContent = price.toString();

  available === true
    ? (priceEl.style.color = "#000")
    : (priceEl.style.color = "#bcbcbc");
  cardEl.appendChild(h1El);
  cardEl.appendChild(descriptionEl);
  cardEl.appendChild(priceEl);
  console.group(cardEl);
  return cardEl;
};

console.log(productsEl);
for (const iterator of database) {
    productsEl.append(makeCard(iterator));
}
