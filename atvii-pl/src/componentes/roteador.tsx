import React, { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroPet from "./formularioCadastroPet";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";
import FormularioConsumoProduto from "./formularioConsumoProduto";
import FormularioConsumoServico from "./formularioConsumoServico";
import ListaCliente from "./listaClientes";
import ListaPet from "./listaPets";
import ListaServico from "./listaServicos";
import ListaProduto from "./listaProdutos";
import ListaClientesMaisConsumiramQuantidade from "./listaClientesMaisConsumiramQuantidade";
import ListaGeralMaisConsumidos from "./listaGeralMaisConsumidos";
import ListaServProdMaisConsumidosTipoRaca from "./listaServProdMaisConsumidosTipoRaca";
import ListaClientesMaisConsumiramValor from "./listaClientesMaisConsumiramValor";
import DetalhesCliente from "./detalhesCliente";
import DetalhesPet from "./detalhesPet";
import DetalhesProduto from "./detalhesProduto";
import DetalhesServico from "./detalhesServico";

type state = {
  tela: string,
  clienteSelecionado: null | string
  petSelecionado: null | string
};

export default class Roteador extends Component<{}, state> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      tela: "Cadastros",
      clienteSelecionado: null,
      petSelecionado: null
    };
    this.selecionarView = this.selecionarView.bind(this);
  }

  selecionarView(novaTela: string, evento: React.MouseEvent<HTMLAnchorElement>) {
    evento.preventDefault();
    this.setState({
      tela: novaTela,
      clienteSelecionado: evento.currentTarget.getAttribute("data-cliente-id"),
      petSelecionado: evento.currentTarget.getAttribute("data-pet-id"),
    });
  }

  render() {
    const barraNavegacao = (
      <BarraNavegacao
        seletorView={this.selecionarView}
        tema="#e3f2fd"
        botoes={["Cadastros", "Consumir", "Clientes", "Pets", "Produtos", "Serviços", "Consumos"]}
      />
    );

    if (this.state.tela === "Clientes") {
      return (
        <>
          {barraNavegacao}
          <div className="d-flex justify-content-center">
            <h2 style={{ margin: "40px" }}>
              Listagem de Clientes
            </h2>
          </div>
          <ListaCliente tema="#e3f2fd" seletorView={this.selecionarView} />
        </>
      );
    }

    if (this.state.tela === "Cadastros") {
      return (
        <>
          {barraNavegacao}
          <div className="d-flex justify-content-center">
            <h2 style={{ margin: "40px" }}>
              Cadastrar um cliente
            </h2>
          </div>
          <FormularioCadastroCliente tema="#e3f2fd" />
          <div className="d-flex justify-content-center">
            <h2 style={{ margin: "40px" }}>
              Cadastrar um Pet
            </h2>
          </div>
          <FormularioCadastroPet tema="#e3f2fd" />
          <div className="d-flex justify-content-center">
            <h2 style={{ margin: "40px" }}>
              Cadastrar um produto
            </h2>
          </div>
          <FormularioCadastroProduto tema="#e3f2fd" />
          <div className="d-flex justify-content-center">
            <h2 style={{ margin: "40px" }}>
              Cadastrar um serviço
            </h2>
          </div>
          <FormularioCadastroServico tema="#e3f2fd" />
        </>
      );
    }

    if (this.state.tela === "Pets") {
      return (
        <>
          {barraNavegacao}
          <div className="d-flex justify-content-center">
            <h2 style={{ margin: "40px" }}>
              Listagem de Pets
            </h2>
          </div>
          <ListaPet tema="#e3f2fd" seletorView={this.selecionarView} />
        </>
      );
    }


    if (this.state.tela === "Produtos") {
      return (
        <>
          {barraNavegacao}
          <div className="d-flex justify-content-center">
            <h2 style={{ margin: "40px" }}>
              Listagem de Produtos
            </h2>
          </div>
          <ListaProduto tema="#e3f2fd" seletorView={this.selecionarView} />
        </>
      );
    }

    if (this.state.tela === "Serviços") {
      return (
        <>
          {barraNavegacao}
          <div className="d-flex justify-content-center">
            <h2 style={{ margin: "40px" }}>
              Listagem de Serviços
            </h2>
          </div>
          <ListaServico tema="#e3f2fd" seletorView={this.selecionarView} />
        </>
      );
    }

    if (this.state.tela === "Consumir") {
      return (
        <>
          {barraNavegacao}
          <div className="d-flex justify-content-center">
            <h2 style={{ margin: "40px" }}>
              Consumir um produto
            </h2>
          </div>
          <FormularioConsumoProduto tema="#e3f2fd" />
          <div className="d-flex justify-content-center">
            <h2 style={{ margin: "40px" }}>
              Consumir um serviço
            </h2>
          </div>
          <FormularioConsumoServico tema="#e3f2fd" />
        </>
      );
    }

    if (this.state.tela === "Consumos") {
      return (
        <>
          {barraNavegacao}
          <div className="d-flex justify-content-center">
            <h2 style={{ margin: "40px" }}>
              Lista dos 10 clientes que mais consumiram em quantidade
            </h2>
          </div>
          <ListaClientesMaisConsumiramQuantidade tema="#e3f2fd" />
          <div className="d-flex justify-content-center">
            <h2 style={{ margin: "40px" }}>
              Lista geral dos serviços/produtos mais consumidos
            </h2>
          </div>
          <ListaGeralMaisConsumidos tema="#e3f2fd" />
          <div className="d-flex justify-content-center">
            <h2 style={{ margin: "40px" }}>
              Lista dos serviços/produtos mais consumidos por tipo e raça de pets
            </h2>
          </div>
          <ListaServProdMaisConsumidosTipoRaca tema="#e3f2fd" />
          <div className="d-flex justify-content-center">
            <h2 style={{ margin: "40px" }}>
              Lista dos 5 clientes que mais consumiram em valor
            </h2>
          </div>
          <ListaClientesMaisConsumiramValor tema="#e3f2fd" />
        </>
      );
    }

    if (this.state.tela === "DetalhesCliente") {
      const detalhesCliente = {
        nome: "Nome do cliente",
        nomeSocial: "Nome social",
        cpf: "000.000.000-00",
        rg: "00.000.000-0",
        produtosConsumidos: "produtos",
        servicosConsumidos: "serviços",
      };

      return (
        <>
          {barraNavegacao}
            <h2 style={{ margin: "40px" }}>
            Detalhes do Cliente
          </h2>
          <DetalhesCliente {...detalhesCliente} />
        </>
      );
    }

    if (this.state.tela === "DetalhesPet") {
      const detalhesPet = {
        cliente: 'Cliente',
        nome: 'Pet',
        tipo: 'Tipo',
        raca: 'Raça',
        genero: 'Gênero'
      };

      return (
        <>
          {barraNavegacao}
            <h2 style={{ margin: "40px" }}>
              Detalhes do Pet
            </h2>
          <DetalhesPet {...detalhesPet} />
        </>
      );
    }

    if (this.state.tela === "DetalhesProduto") {
      const detalhesProduto = {
        nome: 'Produto',
        valor: 'Valor'
      };

      return (
        <>
          {barraNavegacao}
            <h2 style={{ margin: "40px" }}>
              Detalhes do Produto
            </h2>
          <DetalhesProduto {...detalhesProduto} />
        </>
      );
    }

    if (this.state.tela === "DetalhesServico") {
      const detalhesServico = {
        nome: 'Servico',
        valor: 'Valor'
      };

      return (
        <>
          {barraNavegacao}
            <h2 style={{ margin: "40px" }}>
              Detalhes do Serviço
            </h2>
          <DetalhesServico {...detalhesServico} />
        </>
      );
    }

    return null;
  }
}
