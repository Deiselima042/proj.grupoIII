import seek from "../model/axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import styles from './filme.module.css'
import {Link} from "react-router-dom"

const Filme = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  const getPost = async () => {
    try {
      const response = await seek.get(`/filmes/${id}`);
      const data = response.data;
      setPost(data);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      {!post.nome ? (
        <p>Carregando...</p>
      ) : (
        <div className={styles.filme}>
          <img src={`../../public/${post.capa}`} alt={post.nome} className={styles.img}/>
          <h2 className={styles.nome}>{post.nome}</h2>
          <h3 className={styles.genero}>{post.genero}</h3>
          <hr />
          <p>Direcao: {post.direcao}</p>
          <p>Pais: {post.pais}</p>
          <p>Distribuição: {post.distribuicao_produto}</p>
          <p>Ano de Lançamento: {post.ano_de_lancamento}</p>
          <p> Duração do filme: {post.duracao_do_filme}</p>
          <hr />
          <h4>{post.sinopse}</h4>
          <Link to={`/filme/editar/${post.id}`}>  
            <button className={styles.editar}>Editar</button>
          </Link>  
         
          <Link to={`/`}>  
          <input type="submit" className={styles.adicionar} value="Excluir"/>
          </Link>

        </div>
      )}
    </div>
  );
};

export default Filme;