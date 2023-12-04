/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaServProdMaisConsumidosTipoRaca(props) {
    let tema = props.tema
    return (
        <div className="container-fluid" style={{ marginLeft: "30px", marginBottom: "30px" }}>
            <div className="list-group" style={{ width: "600px" }}>
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
                                Consumo 1

                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>
                                Consumo 2
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>
                                Consumo 3
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>
                                Consumo 4
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>
                                Consumo 5
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}