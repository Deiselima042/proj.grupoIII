import { useState } from "react";
import "./App.css";
import Montanha_1 from './imagens/imagem_1.png';
import Montanha_2 from './imagens/imagem_2.png';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>

<header> 
  <button>HOME</button>
  <button>FILME</button>
  <button>CINEMA</button>
</header>

<t>Título da imagem 1</t>

<br></br>
<img src={Montanha_1}></img>

<br></br>

<t>Título da imagem 2</t>

<br></br>
<img src={Montanha_2}></img>



<footer>
  <t>texto_1</t>
  <t>texto_2</t>
</footer>
    </div>




  );
}

export default App;
