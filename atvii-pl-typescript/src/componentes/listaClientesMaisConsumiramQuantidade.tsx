import React, { Component } from "react";

type Props = {
  tema: string;
};

export default class ListaClientesMaisConsumiramQuantidade extends Component<Props> {
  render() {
    let tema = this.props.tema;
    return (
      <div className="container-fluid" style={{ marginLeft: "30px", marginBottom: "30px" }}>
        <table className="table mx-auto" style={{ width: "600px" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Consumo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <a href="/consumo-x" className="list-group-item list-group-item-action" data-cliente-id="1">
                  Consumo 1
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                <a href="/consumo-x" className="list-group-item list-group-item-action" data-cliente-id="2">
                  Consumo 2
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>
                <a href="/consumo-x" className="list-group-item list-group-item-action" data-cliente-id="3">
                  Consumo 3
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>
                <a href="/consumo-x" className="list-group-item list-group-item-action" data-cliente-id="4">
                  Consumo 4
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>
                <a href="/consumo-x" className="list-group-item list-group-item-action" data-cliente-id="5">
                  Consumo 5
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>
                <a href="/consumo-x" className="list-group-item list-group-item-action" data-cliente-id="6">
                  Consumo 6
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>
                <a href="/consumo-x" className="list-group-item list-group-item-action" data-cliente-id="7">
                  Consumo 7
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>
                <a href="/consumo-x" className="list-group-item list-group-item-action" data-cliente-id="8">
                  Consumo 8
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>
                <a href="/consumo-x" className="list-group-item list-group-item-action" data-cliente-id="9">
                  Consumo 9
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>
                <a href="/consumo-x" className="list-group-item list-group-item-action" data-cliente-id="10">
                  Consumo 10
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
