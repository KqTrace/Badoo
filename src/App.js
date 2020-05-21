import React from "react";
import ReactDOM from "react-dom";
import FrontPage from "./FrontPage.js"

function App(){
    return (
        <div className="container-fluid colunar p-0">
            <FrontPage />
        </div>
    );
}

export default App;
ReactDOM.render(<App/>, document.getElementById('root'));