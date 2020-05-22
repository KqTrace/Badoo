import React from "react";
import ReactDOM from "react-dom";


function NavSalas(){
    return (
      <div className="salas">
        <h3 className="text-center">Tabernas</h3>
        <ul>
          <li>
            <i className="fas fa-guitar"></i>Músicas
          </li>
          <li>
            <i className="far fa-play-circle"></i>Vídeos
          </li>
          <li>
            <i className="fas fa-film"></i>Filmes
          </li>
          <li>
            <i className="fas fa-dragon"></i>Animes
          </li>
        </ul>
        <button className="btn btn-outline-light btn-block">
          <i className="fas fa-plus"></i> Crie sua Taberna
        </button>
        <h4 className="text-center">É grátis ! </h4>
      </div>
    );
}

export default NavSalas;