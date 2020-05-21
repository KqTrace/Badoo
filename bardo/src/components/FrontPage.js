import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navigation";
import MainContent from "./MainContent";

class FrontPage extends React.Component {

    render(){
    return (
        <div id="allcont">
            <div className="row m-0">
                <div className="col-md-2">
                    <Navigation />
                </div>
                <div className="col-md-10 pr-0">
                    <MainContent />
                </div>
            </div>
        </div>
    );}
}

export default FrontPage;