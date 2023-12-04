import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioConsumoProduto extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid d-flex justify-content-center align-items-center" >
                <form className="text-center">
                    <div className="input-group mb-3" style={{ width: "600px" }}>
                        <input type="text" className="form-control" placeholder="CPF do cliente" aria-label="CPF do cliente" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3" style={{ width: "600px" }}>
                        <input type="text" className="form-control" placeholder="Nome do pet" aria-label="Nome do pet" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3" style={{ width: "600px" }}>
                        <input type="text" className="form-control" placeholder="Nome do produto" aria-label="Nome do produto" aria-describedby="basic-addon1" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-secondary" type="submit" style={{ backgroundColor: "#8A5DC6", width: "100px", marginRight: "20px", marginBottom: "30px" }}>
                            Consumir
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
