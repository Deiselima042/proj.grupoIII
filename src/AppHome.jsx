import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Montanha_1 from './imagens/imagem_1.png';
import imagem_6 from './imagens/imagem_6.png'
import Imagem_7 from './imagens/Imagem_7.png';
import Imagem_9 from './imagens/imagem_10.png';
import Imagem_11 from './imagens/imagem_11.png';
import Imagem_12 from './imagens/imagem_12.png';
import Imagem_13 from './imagens/imagem_13.png';


function someFunction(e) {
  e.preventDefault()
  
  console.log('some function executed')
}


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <header className="header">
        <img className="logo" src={imagem_6}></img>
        <nav className="nav">
          <button>HOME</button>
          <button>FILME</button>
          <button>CINEMA</button>

        </nav>
      </header>


      <div class="outer-text">
        <div class="text">

          <p>As ações de solidariedade ganham força e mostram seu potencial para fazer a diferença na sociedade.
            A campanha Panoramic Pet Cineworld é uma solidariedade para salvar os animais.
            A nova vertente do movimento inclui a arrecadação de verbas para os animais em situação de vulnerabilidade.
            Tudo arrecadado será distribuído a cuidado dos bichinhos resgatados ou em situação de rua.
            A iniciativa, Panoramic Pet Cineworld é uma campanha para unir os valores arrecadados de cinemas que aceitaram participar
            desse movimento, assim garantir que mais de 4 mil cães e gatos entre outros, sejam alimentados. Estamos unidos por uma
            corrente do bem, que beneficia e ajuda os animais.</p>
        </div>

        
        <div className="rodape">
          <img className="logo" src={Imagem_11}></img>
          <img className="logo" src={Imagem_12}></img>
          <img className="logo" src={Imagem_13}></img>
        </div>

      </div>


    </div>




  );
}

export default App;
