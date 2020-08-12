import React from "react";
import ReactDOM from "react-dom";

function AprBannerItem(props){
    return (
        <div className="moldura">
            <h3 className="text-center">{props.title}</h3>
            <div className="globe">
             <div className="imgbanner"></div>   
            </div>
    <p className="text-justify text-center">{props.desc}</p>
        </div>
    );
}

export default AprBannerItem;