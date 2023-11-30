import React, { Component } from "react";

type Props = {
    tema: string;
};

export default class FormularioCadastroCliente extends Component<Props> {
    render() {
        let tema = this.props.tema;
        return (
            <div className="container-fluid d-flex justify-content-center align-items-center" >
                <form className="text-center">
                    <div className="input-group mb-3" style={{ width: "600px" }}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nome"
                            aria-label="Nome"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                    <div className="input-group mb-3" style={{ width: "600px" }}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nome social"
                            aria-label="Nome social"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                    <div className="input-group mb-3" style={{ width: "600px" }}>
                        <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3" style={{ width: "600px" }}>
                        <input type="text" className="form-control" placeholder="Data de emissão CPF" aria-label="Data de emissão CPF" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3" style={{ width: "600px" }}>
                        <input type="text" className="form-control" placeholder="RG" aria-label="RG" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3" style={{ width: "600px" }}>
                        <input type="text" className="form-control" placeholder="Data de emissão RG" aria-label="Data de emissão RG" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3" style={{ width: "600px" }}>
                        <input type="text" className="form-control" placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button
                            className="btn btn-secondary"
                            type="submit"
                            style={{ backgroundColor: "#8A5DC6", width: "100px", marginRight: "20px", marginBottom: "30px" }}
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
