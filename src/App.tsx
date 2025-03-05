import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <h1>Artigos e Dicas Úteis</h1>
      <div className="article-container">
        <div className="article-card">
          <img
            src="https://free-images.com/lg/106f/sandwich_blt_seafood_bacon.jpg"
            alt="Sanduíche"
            className="article-image"
          />
          <div className="article-content">
            <h3 className="article-title">
              O Sanduíche de Frutos do Mar Perfeito para uma Dieta Saudável
            </h3>
            <p className="article-description">
              Descubra como este delicioso sanduíche pode fazer parte da sua
              alimentação.
            </p>
            <a href="#" className="article-read-more">
              Leia mais →
            </a>
          </div>
        </div>

        <div className="article-card">
          <img
            src="https://free-images.com/lg/68e4/donuts_chocolate_apple_fritter.jpg"
            alt="Donuts"
            className="article-image"
          />
          <div className="article-content">
            <h3 className="article-title">
              Donuts: Eles Podem Fazer Parte de uma Alimentação Balanceada?
            </h3>
            <p className="article-description">
              Saiba como saborear seus doces favoritos sem prejudicar sua saúde.
            </p>
            <a href="#" className="article-read-more">
              Leia mais →
            </a>
          </div>
        </div>

        <div className="article-card">
          <img
            src="https://free-images.com/lg/41e4/russian_salad.jpg"
            alt="Salada"
            className="article-image"
          />
          <div className="article-content">
            <h3 className="article-title">
              Frescor e Nutrição: Os Benefícios das Saladas
            </h3>
            <p className="article-description">
              Uma maneira simples e poderosa de nutrir seu corpo com vitaminas e
              minerais essenciais.
            </p>
            <a href="#" className="article-read-more">
              Leia mais →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
