/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaServProdMaisConsumidosTipoRaca(props) {
    let tema = props.tema
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
            </tbody>
          </table>
        </div>
      );
}