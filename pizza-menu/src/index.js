import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = { fontSize: "50px", color: "#982121", textAlign: "center" };
  return (
    <h1 style={style} className="header">
      Fast React Pizza Co.
    </h1>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = openHour <= hour + 1 && hour + 1 <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} /> // Use props to pass data from parent component to the child component.
      ) : (
        <p>
          Sorry, we're closed. We're open from {openHour}:00 to {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order(props) {
  // could directly pass the hour value instead use props.
  return (
    <div className="order">
      <p>We're open until {props.closeHour}:00.</p>
      <button className="btn">Order</button>
    </div>
  );
}

function Menu() {
  const pizzaNum = pizzaData.length;

  return (
    <main className="menu">
      <h2>Pizza Menu</h2>
      {pizzaNum > 0 ? (
        <>
          {" "}
          {/*  react fragment, to group the things together without destroy the layout. Sometimes need a key like <React.Fragement key='asdf'> */}
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map(
              //pizzaData is an array
              (pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.name} />
              )
            )}
          </ul>
        </>
      ) : (
        <p>We're still making our menu. Please come back later :)</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // destructure the props, just pass in the {pizzaObj} here instead of pass the whole props value. but remember the {} cuz it's js now, props donnot need the {}.
  // so the following, instead of props.pizzaObj.name, just need to write pizzaObj.name.
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""} `}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>
          {pizzaObj.soldOut ? (
            "Sold Out"
          ) : (
            <span style={{ color: "#813531" }}>Price: {pizzaObj.price}</span>
          )}
        </span>
      </div>
    </li>
  );
}
