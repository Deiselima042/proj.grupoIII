import img_1 from './header_img_1.png';
import './header_style.css';
import { useNavigate } from "react-router-dom";


function Header() {

  const abrirlink = useNavigate();


  return (

    <header className="header_das_paginas">
      <img onClick={() => { abrirlink('/'); }} className="header_logo" src={img_1}></img>

      <nav className="header_botoes_de_navegacao">

        <button onClick={() => { abrirlink('/'); }} className="header_button">HOME</button>
        <button onClick={() => { abrirlink('/filmes'); }} className="header_button">FILME</button>
        <button onClick={() => { abrirlink('/cinemas'); }} className="header_button">CINEMA</button>

      </nav>
    </header>

  );
}

export default Header;


