import React, { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroPet from "./formularioCadastroPet";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";
import FormularioConsumoProduto from "./formularioConsumoProduto";
import FormularioConsumoServico from "./formularioConsumoServico";
import ListaCliente from "./listaCliente";
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
                "Listagem",
              ]}
            />
            <div className="d-flex justify-content-center">
            <h2 style={{ margin: "40px" }}>Cadastrar um cliente</h2>
            </div>
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
                "Listagem",
              ]}
            />
            <div className="d-flex justify-content-center">
            <h2 style={{ margin: "40px" }}>Cadastrar um cliente</h2>
            </div>
            <FormularioCadastroCliente tema="#e3f2fd" />
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
              "Listagem",
            ]}
          />
          <div className="d-flex justify-content-center">
            <h2 style={{ margin: "40px" }}>Listagem de Clientes</h2>
            </div>
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
                "Listagem",
              ]}
            />
            <h2 style={{ margin: "40px" }}>Listagem de clientes</h2>
            <ListaCliente tema="#e3f2fd" />
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
              "Listagem",
            ]}
          />
          <div className="d-flex justify-content-center">
            <h2 style={{ margin: "40px" }}>Detalhes do Cliente</h2>
          <DetalhesCliente tema="#e3f2fd" />
          </div>
        </>
      );
    } 
  };

  return <div>{construirView()}</div>;
}
