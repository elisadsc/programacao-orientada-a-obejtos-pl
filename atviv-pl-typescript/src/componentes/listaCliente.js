/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import DetalhesCliente from "./detalhesCliente";

export default function ListaCliente(props) {
  const [clienteSelecionado, setClienteSelecionado] = useState(null);
  const [exibirDetalhes, setExibirDetalhes] = useState(false);

  //cliente mockado
  const cliente = {
    id: 1,
    nome: 'Teste',
    nomeSocial: 'Teste',
    cpf: 12345678912,
    dataCpf: '01/01/2001',
    rg: 123456789123,
    dataRg: '01/01/2001',
    telefone: 12999999999,
    produtosConsumidos: 'x',
    servicosConsumidos: 'x'
  }

  //função que salva o cliente selecionado para exibir detalhes
  const selecionarCliente = (cliente) => {
    setClienteSelecionado(cliente);
    setExibirDetalhes(true);
  };

  //botão de voltar para a lista
  const voltarLista = () => {
    setClienteSelecionado(null);
    setExibirDetalhes(false);
  };

  return (
    <div className="container-fluid" style={{ marginLeft: "30px" }}>
      {exibirDetalhes ? (
        <DetalhesCliente cliente={clienteSelecionado} voltarLista={voltarLista} />
      ) : (
        <div className="list-group" style={{ width: "600px" }}>
            <a
              key={cliente.id}
              href="#"
              className="list-group-item list-group-item-action"
              onClick={() => selecionarCliente(cliente)}
            >
              {cliente.nome}
            </a>
        </div>
      )}
    </div>
  );
}