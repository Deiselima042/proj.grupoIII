import seek from "../model/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./NovoFilme.module.css"

const NovoFilme = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState();
  const [genero, setGenero] = useState();
  const [direcao, setDirecao] = useState();
  const [pais, setPais] = useState();
  const [distribuicao_producao, setDistribuicao] = useState();
  const [ano_de_lancamento, setAno] = useState();
  const [duracao_do_filme, setDuracao] = useState();
  const [sinopse, setSinopse] = useState();
  const [capa, setCapa] = useState();

  const createPost = async (e) => {
    e.preventDefault();
    const post = { nome, genero, direcao, pais, distribuicao_producao, ano_de_lancamento, duracao_do_filme, sinopse,capa};
    await seek.post("/filmes", post);
    navigate("/catalogo");
  };

  return (
    <div>

      
      <form onSubmit={(e) => createPost(e)} className={style.createPost}>
       <h1 className={style.h2createPost}>Cadastro de novos filmes</h1>
       <div className={style.cols}>
        <section className={style.col1}>
        
        <div>
          <label htmlFor="nome">Título:</label>
          <input type="text" name="nome" id="nome" placeholder="Digite o título" onChange={(e) => setNome(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="genero">Gênero:</label>
          <input type="text" name="genero" id="genero" placeholder="Digite o gênero" onChange={(e) => setGenero(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="ano_de_lancamento">Ano de Lançamento:</label>
          <input type="number" name="ano_de_lancamento" id="ano_de_lancamento" placeholder="Digite a ano de laçamento" onChange={(e) => setAno(e.target.value)}/>
        </div>
       
      
        <div>
          <label htmlFor="direcao">Direção:</label>
          <input type="text" name="direcao" id="direcao" placeholder="Digite Direção" onChange={(e) => setDirecao(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="capa">Capa:</label>
          <input type="text" name="capa" id="capa" placeholder="Digite Pais" onChange={(e) => setCapa(e.target.value)}/>
        </div>
        </section>

        <section className={style.col2}>
        <div>
          <label htmlFor="pais">Pais:</label>
          <input type="text" name="pais" id="pais" placeholder="Digite o mês e ano de lançamento" onChange={(e) => setPais(e.target.value)}/>
        </div>
                
        <div>
          <label htmlFor="distribuicao_producao">Distribuição e Produção:</label>
          <input type="text" name="distribuicao_producao" id="distribuicao_producao" placeholder="Digite a Distribuição de Produção" onChange={(e) => setDistribuicao(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="duracao_do_filme">Duração do Filme:</label>
          <input type="number" name="duracao_do_filme" id="duracao_do_filme" placeholder="Duração do filme" onChange={(e) => setDuracao(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="sinopse">Sinopse:</label> 
          <input type="text" name="sinopse" id="sinopse" placeholder="Escreva sinopse" onChange={(e) => setSinopse(e.target.value)}/>
        </div>
        </section>
        </div>
        <input type="submit" value="Cadastrar" className={style.botaoCreatePost} />
        <input type="reset" value="Limpar" className={style.botaoResetPost} />
      </form>
    </div>
  );
};

export default NovoFilme;