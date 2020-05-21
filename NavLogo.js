import React from "react";
import ReactDOM from "react-dom";

function NavLogo() {
    return React.createElement(
        "div",
        { className: "logotipo d-flex justify-content-center" },
        React.createElement(
            "h1",
            null,
            "Bardo"
        )
    );
}

export default NavLogo;