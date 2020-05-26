import React from "react";
import ReactDOM from "react-dom";
import AprBannerItem from "./AprBannerItem";

function AprBanners(){

    return(<div>
            <div className="row">
                <div className="col-md-4">
                <div className="alturabanneritem">
                <AprBannerItem title="O que é o Bardo?" desc="O Bardo é uma nova maneira de ouvir, assistir e compartilhar conteúdos como Músicas, Filmes, Vídeos, Animes e muito mais em tempo real com todos os outros presentes na sala.
            Saiba mais clicando aqui"/>
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