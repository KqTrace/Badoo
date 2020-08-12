import React from "react";
import ReactDOM from "react-dom";
import AprBannerItem from "./AprBannerItem";

function AprBanners(){

    return(<div>
            <div className="row">
                <div className="col-md-4">
                <div className="alturabanneritem">
                <AprBannerItem title="O que é o Bardo?" desc={["O Bardo é uma nova maneira de ouvir, assistir e compartilhar conteúdos como ", <span>Músicas</span>, ", ", <span> Filmes</span>, ", ", <span>Vídeos</span>, ", ", <span>Animes</span>, " e muito mais em ", <span>tempo real</span>, " com todos os outros presentes na sala. Saiba mais clicando aqui"]} />
                </div>
                </div>
                <div className="col-md-4">
                <div className="alturabanneritem">
                <AprBannerItem />
                </div>
                </div>
                <div className="col-md-4">
                <div className="alturabanneritem">
                <AprBannerItem />
                </div>
                </div>
            </div>
            </div>
    );
}

export default AprBanners;