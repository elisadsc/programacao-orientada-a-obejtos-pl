/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useEffect, useState } from 'react'
import DetalhesProduto from "../detalhes/detalhesProduto";

export default function ListaServico(props) {
    const [produtos, setProdutos] = useState([]);
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);
    const [exibirDetalhes, setExibirDetalhes] = useState(false);

    const tema = props.tema;

    useEffect(() => {
      axios.get("http://localhost:3001/listagemProdutos")
        .then(response => {
          setProdutos(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  
    //função que salva o produto selecionado para exibir detalhes
    const selecionarProduto = (produto) => {
      setProdutoSelecionado(produto);
      setExibirDetalhes(true);
    };
  
    //botão de voltar para a lista
    const voltarLista = () => {
      setProdutoSelecionado(null);
      setExibirDetalhes(false);
    };
    
    return (
      <div className="container-fluid" style={{ marginLeft: "30px" }}>
      {exibirDetalhes ? (
        <DetalhesProduto produto={produtoSelecionado} voltarLista={voltarLista} />
      ) : (
        <div className="list-group" style={{ width: "600px" }}>
          {produtos.map(produto => (
            <a
              key={produto.id}
              href="#"
              className="list-group-item list-group-item-action"
              onClick={() => selecionarProduto(produto)}
            >
              {produto.nome}
            </a>
            ))}
        </div>
      )}
    </div>
    )
}