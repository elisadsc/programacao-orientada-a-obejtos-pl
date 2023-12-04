import React, { useState } from "react";
import BarraNavegacao from "../components/barraNavegacao";
import FormularioCadastroCliente from "../components/cadastros/formularioCadastroCliente";
import FormularioCadastroPet from "../components/cadastros/formularioCadastroPet";
import FormularioCadastroProduto from "../components/cadastros/formularioCadastroProduto";
import FormularioCadastroServico from "../components/cadastros/formularioCadastroServico";
import FormularioConsumoProduto from "../components/consumo/formularioConsumoProduto";
import FormularioConsumoServico from "../components/consumo/formularioConsumoServico";
import ListaCliente from "../components/listagens/listaCliente";
import ListaPet from "../components/listagens/listaPets";
import ListaServico from "../components/listagens/listaServicos";
import ListaProduto from "../components/listagens/listaProdutos";
import ListaClientesMaisConsumiramQuantidade from "../components/listagens/listaClientesMaisConsumiramQuantidade";
import ListaGeralMaisConsumidos from "../components/listagens/listaGeralMaisConsumidos";
import ListaServProdMaisConsumidosTipoRaca from "../components/listagens/listaServProdMaisConsumidosTipoRaca";
import ListaClientesMaisConsumiramValor from "../components/listagens/listaClientesMaisConsumiramValor";
import DetalhesCliente from "../components/detalhes/detalhesCliente";
import DetalhesPet from "../components/detalhes/detalhesPet";
import DetalhesProduto from "../components/detalhes/detalhesProduto";
import DetalhesServico from "../components/detalhes/detalhesServico";

export default function Roteador() {
  const [tela, setTela] = useState("Cadastrar");
  const [exibirDropdown, setExibirDropdown] = useState(false);

  const selecionarView = (valor, e) => {
    e.preventDefault();
    if (valor === "Cadastrar") {
      setExibirDropdown(!exibirDropdown);
    } else {
      setTela(valor);
    }
  };

  const construirView = () => {
    if (tela === "Cadastrar") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Cadastrar um cliente</h2>
            <FormularioCadastroCliente tema="#e3f2fd" />
          </>
        );
    }
    if (tela === "Cliente") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Cadastrar um cliente</h2>
            <FormularioCadastroCliente tema="#e3f2fd" />
          </>
        );
      }
      if (tela === "Pet") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Cadastrar um Pet</h2>
            <FormularioCadastroPet tema="#e3f2fd" />
          </>
        );
      }
      if (tela === "Produto") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Cadastrar um produto</h2>
            <FormularioCadastroProduto tema="#e3f2fd" />
          </>
        );
      }
      if (tela === "Serviço") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Cadastrar um serviço</h2>
            <FormularioCadastroServico tema="#e3f2fd" />
          </>
        );
      }
      if (tela === "Consumir") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Consumir um produto</h2>
            <FormularioConsumoProduto tema="#e3f2fd" />
          </>
        );
      }
      if (tela === "Consumir produto") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Consumir um produto</h2>
            <FormularioConsumoProduto tema="#e3f2fd" />
          </>
        );
      }   
      if (tela === "Consumir serviço") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Consumir um serviço</h2>
            <FormularioConsumoServico tema="#e3f2fd" />
          </>
        );
      }
    if (tela === "Listagem") {
      return (
        <>
          <BarraNavegacao
            seletorView={selecionarView}
            tema="#e3f2fd"
            botoes={[
              "Cadastrar",
              "Consumir",
              "Listagem",
              "Consumos"
            ]}
          />
          <h2 style={{ marginLeft: "40px" }}>Listagem de Clientes</h2>
          <ListaCliente tema="#e3f2fd" />
        </>
      );
    } 
    if (tela === "Lista clientes") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Listagem de clientes</h2>
            <ListaCliente tema="#e3f2fd" />
          </>
        );
      }
      if (tela === "Lista pets") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Listagem de pets</h2>
            <ListaPet tema="#e3f2fd" />
          </>
        );
      }
      if (tela === "Lista produtos") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Listagem de produtos</h2>
            <ListaProduto tema="#e3f2fd" />
          </>
        );
      }
      if (tela === "Lista serviços") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Listagem de serviços</h2>
            <ListaServico tema="#e3f2fd" />
          </>
        );
      }      
    else if (tela === "Consumos") {
      return (
        <>
          <BarraNavegacao
            seletorView={selecionarView}
            tema="#e3f2fd"
            botoes={[
              "Cadastrar",
              "Consumir",
              "Listagem",
              "Consumos"
            ]}
          />
          <h2 style={{ marginLeft: "40px" }}>Lista 10 clientes que mais consumiram em quantidade</h2>
          <ListaClientesMaisConsumiramQuantidade tema="#e3f2fd" />
        </>
      );
    }
    if (tela === "10 clientes que mais consumiram em quantidade") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Lista 10 clientes que mais consumiram em quantidade</h2>
            <ListaClientesMaisConsumiramQuantidade tema="#e3f2fd" />
          </>
        );
      }
      if (tela === "5 clientes que mais consumiram em valor") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Lista 5 clientes que mais consumiram em valor</h2>
            <ListaClientesMaisConsumiramValor tema="#e3f2fd" />
          </>
        );
      }
      if (tela === "Serviços/produtos mais consumidos") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Lista geral dos serviços/produtos mais consumidos</h2>
            <ListaGeralMaisConsumidos tema="#e3f2fd" />
          </>
        );
      }
      if (tela === "Serviços/produtos mais consumidos por tipo e raça de pets") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Lista dos serviços/produtos mais consumidos por tipo e raça de pets</h2>
            <ListaServProdMaisConsumidosTipoRaca tema="#e3f2fd" />
          </>
        );
      }


      else if (tela === "DetalhesCliente") {
      return (
        <>
          <BarraNavegacao
            seletorView={selecionarView}
            tema="#e3f2fd"
            botoes={[
              "Cadastrar",
              "Consumir",
              "Listagem",
              "Consumos"
            ]}
          />
          <h2 style={{ marginLeft: "40px" }}>Detalhes do Cliente</h2>
          <DetalhesCliente tema="#e3f2fd" />
        </>
      );
    } else if (tela === "DetalhesPet") {
      return (
        <>
          <BarraNavegacao
            seletorView={selecionarView}
            tema="#e3f2fd"
            botoes={[
              "Cadastrar",
              "Consumir",
              "Listagem",
              "Consumos"
            ]}
          />
          <h2 style={{ marginLeft: "40px" }}>Detalhes do Pet</h2>
          <DetalhesPet tema="#e3f2fd" />
        </>
      );
    } else if (tela === "DetalhesProduto") {
      return (
        <>
          <BarraNavegacao
            seletorView={selecionarView}
            tema="#e3f2fd"
            botoes={[
              "Cadastrar",
              "Consumir",
              "Listagem",
              "Consumos"
            ]}
          />
          <h2 style={{ marginLeft: "40px" }}>Detalhes do Produto</h2>
          <DetalhesProduto tema="#e3f2fd" />
        </>
      );
    } else if (tela === "DetalhesServico") {
      return (
        <>
          <BarraNavegacao
            seletorView={selecionarView}
            tema="#e3f2fd"
            botoes={[
              "Cadastrar",
              "Consumir",
              "Listagem",
              "Consumos"
            ]}
          />
          <h2 style={{ marginLeft: "40px" }}>Detalhes do Serviço</h2>
          <DetalhesServico tema="#e3f2fd" />
        </>
      );
    }
  };

  return <div>{construirView()}</div>;
}