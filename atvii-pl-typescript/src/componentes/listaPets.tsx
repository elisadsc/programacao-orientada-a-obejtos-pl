import React, { Component } from "react";

type Props = {
  tema: string;
  seletorView: (novaTela: string, evento: React.MouseEvent<HTMLAnchorElement>) => void;
};

export default class ListaPet extends Component<Props> {
  render() {
    const { tema, seletorView } = this.props;
    return (
      <div className="container-fluid" style={{ marginLeft: "30px" }}>
        <div className="list-group text-center" style={{ width: "600px", margin: "0 auto" }}>
          <a
            href="/pet-x"
            className="list-group-item list-group-item-action"
            data-pet-id="1"
            onClick={(e) => seletorView("DetalhesPet", e)}
          >
            Pet 1
          </a>
          <a
            href="/pet-x"
            className="list-group-item list-group-item-action"
            data-pet-id="2"
            onClick={(e) => seletorView("DetalhesPet", e)}
          >
            Pet 2
          </a>
          <a
            href="/pet-x"
            className="list-group-item list-group-item-action"
            data-pet-id="3"
            onClick={(e) => seletorView("DetalhesPet", e)}
          >
            Pet 3
          </a>
          <a
            href="/pet-x"
            className="list-group-item list-group-item-action"
            data-pet-id="4"
            onClick={(e) => seletorView("DetalhesPet", e)}
          >
            Pet 4
          </a>
          <a
            href="/pet-x"
            className="list-group-item list-group-item-action"
            data-pet-id="5"
            onClick={(e) => seletorView("DetalhesPet", e)}
          >
            Pet 5
          </a>
          <a
            href="/pet-x"
            className="list-group-item list-group-item-action"
            data-pet-id="6"
            onClick={(e) => seletorView("DetalhesPet", e)}
          >
            Pet 6
          </a>
        </div>
      </div>
    );
  }
}
