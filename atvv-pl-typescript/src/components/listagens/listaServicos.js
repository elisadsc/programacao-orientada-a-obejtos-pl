/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useEffect, useState } from 'react'
import DetalhesServico from "../detalhes/detalhesServico";

export default function ListaServico(props) {
    const [servicos, setServicos] = useState([]);
    const [servicoSelecionado, setServicoSelecionado] = useState(null);
    const [exibirDetalhes, setExibirDetalhes] = useState(false);

    const tema = props.tema;

    const servico = {
      nome: 'Serviço',
      valor: 'R$10,00'
    }
  
    //função que salva o serviço selecionado para exibir detalhes
    const selecionarServico = (servico) => {
      setServicoSelecionado(servico);
      setExibirDetalhes(true);
    };
  
    //botão de voltar para a lista
    const voltarLista = () => {
      setServicoSelecionado(null);
      setExibirDetalhes(false);
    };
    
    return (
      <div className="container-fluid" style={{ marginLeft: "30px" }}>
      {exibirDetalhes ? (
        <DetalhesServico servico={servicoSelecionado} voltarLista={voltarLista} />
      ) : (
        <div className="list-group" style={{ width: "600px" }}>
            <a
              key={servico.id}
              href="#"
              className="list-group-item list-group-item-action"
              onClick={() => selecionarServico(servico)}
            >
              {servico.nome}
            </a>
        </div>
      )}
    </div>
    )
}