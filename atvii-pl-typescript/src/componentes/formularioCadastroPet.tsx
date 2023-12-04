import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroPet extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid d-flex justify-content-center align-items-center" >
                <form className="text-center">
                    <div className="input-group mb-3" style={{ width: "600px" }}>
                        <input type="text" className="form-control" placeholder="CPF do tutor" aria-label="CPF do tutor" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3" style={{ width: "600px" }}>
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3" style={{ width: "600px" }}>
                        <input type="text" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3" style={{ width: "600px" }}>
                        <input type="text" className="form-control" placeholder="Gênero" aria-label="Gênero" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3" style={{ width: "600px" }}>
                        <input type="text" className="form-control" placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-secondary" type="submit" style={{ backgroundColor: "#8A5DC6", width: "100px", marginRight: "20px", marginBottom: "30px" }}>
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
