import React from "react";
import './Cards.css';
import axios from 'axios'
import { useState, useEffect } from 'react'

function Cards() {
  const [info, setInfo] = useState([])

  useEffect(()=>{

  axios.get('https://projeto-servidor.onrender.com/cinemas')
  .then((res)=> setInfo(res.data))

  },[])



  return (

    <div className="box">
    
        <div className="card-header">
        
        {info.length === 0 ? (<img src="https://thumbs.gfycat.com/MeekBoringGnat-size_restricted.gif"/>) : (
            info.map((cinema)=> (
            <div>
              <div className="cinema" key={cinema.id}>
                <ul>
                  <li><img className="img-cards-cinema" src={cinema.imagem} alt=""/></li>
                  <li><span><h3>Cinema:</h3></span> {cinema.cine_nome}</li>
                  <li><span><h3>Localização:</h3></span> {cinema.localizacao}</li>
                  <li><span><h3>Horario:</h3></span> {cinema.horario_dos_filmes}</li>
                  <li><span><h3>Assentos:</h3></span>{cinema.assentos}</li>
                  <li><span><button>Comprar Ingresso:</button></span></li>
                
                </ul>
                <br/>
               <hr className='hr'/>
               <br/>
              </div>
              </div>
            ))
          ) }
      </div>
    </div>
          
   

  )

}

export default Cards