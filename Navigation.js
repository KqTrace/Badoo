import React from "react";
import ReactDOM from "react-dom";
import NavLogo from "./NavLogo.js";
import NavSalas from "./NavSalas.js";
import NavCadLog from "./NavCadLog.js";

function Navigation() {
    return React.createElement(
        "div",
        { id: "navigation", className: "pl-1 pt-4 pb-4" },
        React.createElement(NavLogo, null),
        React.createElement(NavSalas, null),
        React.createElement(NavCadLog, null)
    );
}

export default Navigation;