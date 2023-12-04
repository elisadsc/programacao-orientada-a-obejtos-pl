import React, { Component } from "react";

type Props = {
  tema: string;
  seletorView: (novaTela: string, evento: React.MouseEvent<HTMLAnchorElement>) => void;
};

export default class ListaCliente extends Component<Props> {
  render() {
    const { tema, seletorView } = this.props;
    return (
      <div className="container-fluid" style={{ marginLeft: "30px" }}>
        <div className="list-group text-center" style={{ width: "600px", margin: "0 auto" }}>
          <a
            href="/cliente-x"
            className="list-group-item list-group-item-action"
            data-cliente-id="1"
            onClick={(e) => seletorView("DetalhesCliente", e)}
          >
            Cliente 1
          </a>
          <a
            href="/cliente-x"
            className="list-group-item list-group-item-action"
            data-cliente-id="2"
            onClick={(e) => seletorView("DetalhesCliente", e)}
          >
            Cliente 2
          </a>
          <a
            href="/cliente-x"
            className="list-group-item list-group-item-action"
            data-cliente-id="3"
            onClick={(e) => seletorView("DetalhesCliente", e)}
          >
            Cliente 3
          </a>
          <a
            href="/cliente-x"
            className="list-group-item list-group-item-action"
            data-cliente-id="4"
            onClick={(e) => seletorView("DetalhesCliente", e)}
          >
            Cliente 4
          </a>
          <a
            href="/cliente-x"
            className="list-group-item list-group-item-action"
            data-cliente-id="5"
            onClick={(e) => seletorView("DetalhesCliente", e)}
          >
            Cliente 5
          </a>
          <a
            href="/cliente-x"
            className="list-group-item list-group-item-action"
            data-cliente-id="6"
            onClick={(e) => seletorView("DetalhesCliente", e)}
          >
            Cliente 6
          </a>
        </div>
      </div>
    );
  }
}
