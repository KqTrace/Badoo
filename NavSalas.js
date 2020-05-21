import React from "react";
import ReactDOM from "react-dom";

function NavSalas() {
  return React.createElement(
    "div",
    { className: "salas" },
    React.createElement(
      "h3",
      { className: "text-center" },
      "Tabernas"
    ),
    React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        null,
        React.createElement("i", { className: "fas fa-guitar" }),
        "M\xFAsicas"
      ),
      React.createElement(
        "li",
        null,
        React.createElement("i", { className: "far fa-play-circle" }),
        "V\xEDdeos"
      ),
      React.createElement(
        "li",
        null,
        React.createElement("i", { className: "fas fa-film" }),
        "Filmes"
      ),
      React.createElement(
        "li",
        null,
        React.createElement("i", { className: "fas fa-dragon" }),
        "Animes"
      )
    ),
    React.createElement(
      "button",
      { className: "btn btn-outline-light btn-block" },
      React.createElement("i", { className: "fas fa-plus" }),
      " Crie sua Taberna"
    ),
    React.createElement(
      "h4",
      { className: "text-center" },
      "\xC9 gr\xE1tis ! "
    )
  );
}

export default NavSalas;