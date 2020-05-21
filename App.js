import React from "react";
import ReactDOM from "react-dom";
import FrontPage from "./FrontPage.js";

function App() {
    return React.createElement(
        "div",
        { className: "container-fluid colunar p-0" },
        React.createElement(FrontPage, null)
    );
}

export default App;
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));