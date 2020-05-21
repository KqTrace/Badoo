import React from "react";
import ReactDOM from "react-dom";

function NavCadLog() {
    return React.createElement(
        "div",
        { className: "cadlog" },
        React.createElement(
            "h5",
            null,
            "J\xE1 possui uma conta?"
        ),
        React.createElement(
            "button",
            { className: "btn btn-warning btn-block" },
            "Entrar"
        ),
        React.createElement(
            "h5",
            null,
            "N\xE3o possui ainda?"
        ),
        React.createElement(
            "button",
            { className: "btn btn-success btn-block" },
            "Cadastrar-se Agora"
        )
    );
}

export default NavCadLog;