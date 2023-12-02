import axios from "axios";
import React, { useState } from "react";

export default function FormularioConsumoProduto(props) {
    let tema = props.tema

    //salva os valores em um state
    const [values, setValues] = useState({
        cpfCliente: '',
        nomePet: '',
        nomeProduto: ''
    });

    //controla o que está sendo digitado nos campos
    const handleChangeValues = (event) => {
        const { name, value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    //limpa os campos
    const clearCampos = () => {
        setValues({
            cpfCliente: '',
            nomePet: '',
            nomeProduto: ''
        });
    };

    //ação ao clicar no botão de cadastro
    const handleClickButton = () => {
            clearCampos();
    }

    return (
        <div className="container-fluid" style={{ marginLeft: "30px" }}>
            <form>
                <div className="input-group mb-3" style={{ width: "600px" }}>
                    <input type="text" className="form-control" placeholder="CPF do cliente" aria-label="CPF do cliente" aria-describedby="basic-addon1" id="cpfCliente" name="cpfCliente" value={values.cpfCliente} onChange={handleChangeValues} />
                </div>
                <div className="input-group mb-3" style={{ width: "600px" }}>
                    <input type="text" className="form-control" placeholder="Nome do pet" aria-label="Nome do pet" aria-describedby="basic-addon1" id="nomePet" name="nomePet" value={values.nomePet} onChange={handleChangeValues} />
                </div>
                <div className="input-group mb-3" style={{ width: "600px" }}>
                    <input type="text" className="form-control" placeholder="Nome do produto" aria-label="Nome do produto" aria-describedby="basic-addon1" id="nomeProduto" name="nomeProduto" value={values.nomeProduto} onChange={handleChangeValues} />
                </div>
                <button className="btn btn-secondary" type="button" style={{ backgroundColor: "#8A5DC6", width: "100px", marginRight: "20px", marginBottom: "30px" }} onClick={handleClickButton}>
                    Cadastrar
                </button>
            </form>
        </div>
    )
}