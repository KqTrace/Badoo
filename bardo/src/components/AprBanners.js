import React from "react";
import ReactDOM from "react-dom";
import AprBannerItem from "./AprBannerItem";

function AprBanners(){

    return(
            <div className="row">
                <div className="col-md-6">
                <AprBannerItem />
                </div>
                <div className="col-md-6">
                <AprBannerItem />
                </div>
            </div>

    );
}

export default AprBanners;