import seek from "../model/axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "./EditarFilme.module.css"

const EditarFilme = () => {
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

  const { id } = useParams();

  const getPost = async () => {
    try {
      const response = await seek.get(`/filmes/${id}`);

      const data = response.data;

      setNome(data.nome);
      setGenero(data.genero);
      setDirecao(data.direcao);
      SetPais(data.pais);
      setDistribuicao(data.distribuicao_produto);
      setDuracao(data.duracao_do_filme);
      setSinopse(data.sinopse);
      setAno(data.ano_de_lancamento);
      setCapa(data.capa);
    } catch (error) {
      console.log(error);
    }
  };

  const editarFilme = async (e) => {
    e.preventDefault();

    const post = { nome, genero, direcao, pais, distribuicao_produto, ano_de_lancamento, duracao_do_filme, sinopse, capa };


    await seek.put(`/filmes/${id}`, post);

    navigate("/catalogo");
  };

    
  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      
      <form onSubmit={(e) => editarFilme(e)} className={style.createPost}>
           <h1 className={style.h2createPost}>Editando: {nome}</h1>     
      <div className={style.cols}>
        <section className={style.col1}>        
        <div>
          <label htmlFor="nome">Título:</label>
          <input
            type="text"
            name="nome"
            id="nome"
            onChange={(e) => setNome(e.target.value)}
            value={nome || ""}
          />
        </div>

        <div>
          <label htmlFor="genero">Genero:</label>
          <input
            type="text"
            name="genero"
            id="genero"
            onChange={(e) => setGenero(e.target.value)}
            value={genero || ""}
          />
        </div>

        <div>
          <label htmlFor="ano_de_lancamento">Ano de lançamento:</label>
          <input
            type="number"
            name="ano_de_lancamento"
            id="ano_de_lancamento"
            placeholder="Digite Ano de Lançamento"
            onChange={(e) => setAno(e.target.value)}
            value={ano_de_lancamento || ""}
          />
        </div>
       
        <div>
          <label htmlFor="direcao">Direção:</label>
          <input
            type="text"
            name="direcao"
            id="direcao"
            placeholder="Digite Direção"
            onChange={(e) => setDireção(e.target.value)}
            value={direcao || ""}
          />
        </div>

        <div>
          <label htmlFor="valor">Capa:</label>
          <input
            type="text"
            name="capa"
            id="capa"
            
            onChange={(e) => setCapa(e.target.value)}
            value={capa || ""}
          />
        </div>
        </section>
        <section className={style.col2}>
        <div>
          <label htmlFor="pais">Pais:</label>
          <input
            type="text"
            name="pais"
            id="pais"
            placeholder="Digite Pais"
            onChange={(e) => setPais(e.target.value)}
            value={pais || ""}
          />
        </div>

        <div>
          <label htmlFor="distribuicao_producao">Distribuição e Produção:</label>
          <input
            type="text"
            name="distribuicao_producao"
            id="distribuicao_producao"
            placeholder="Digite a Distribuição e Produção"
            onChange={(e) => setDistribuicao(e.target.value)}
            value={distribuicao_producao || ""}
          />
        </div>

       

        <div>
          <label htmlFor="duracao_do_filme">Duração do Filme:</label>
          <input
            type="number"
            name="duracao_do_filme"
            id="duracao_do_filme"
            placeholder="Duração do Filme"
            onChange={(e) => setDuracao(e.target.value)}
            value={duracao_do_filme || ""}
          />
        </div>

        <div>
          <label htmlFor="sinopse">Sinopse:</label>
          <input
            type="text"
            name="sinopse"
            id="sinopse"
            placeholder="Escreva Sinopse"
            onChange={(e) => setsinopse(e.target.value)}
            value={sinopse || ""}
          />
        </div>


        </section>
        </div>
        <input type="submit" value="Salvar"  className={style.botaoCreatePost}/>
      </form>
    </div>
  );
};

export default EditarFilme;