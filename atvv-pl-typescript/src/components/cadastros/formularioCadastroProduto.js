import axios from "axios";
import React, { useState } from "react";

export default function FormularioCadastroProduto(props) {
    let tema = props.tema

    //salva os valores em um state
    const [values, setValues] = useState({
        nome: '',
        valor: ''
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
            nome: '',
            valor: ''
        });
    };

    //ação ao clicar no botão de cadastro
    const handleClickButton = () => {
        axios.post("http://localhost:3001/produtos", {
            nome: values.nome,
            valor: values.valor
        }).then((response) => {
            clearCampos();
        });
    }

    return (
        <div className="container-fluid" style={{ marginLeft: "30px" }}>
            <form>
                <div className="input-group mb-3" style={{ width: "600px" }}>
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" id="nome" name="nome" value={values.nome} onChange={handleChangeValues} />
                </div>
                <div className="input-group mb-3" style={{ width: "600px" }}>
                    <div class="input-group-text">$</div>
                    <input type="text" className="form-control" placeholder="Valor" aria-label="Valor" aria-describedby="basic-addon1" id="valor" name="valor" value={values.valor} onChange={handleChangeValues} />
                </div>
                <button className="btn btn-secondary" type="button" style={{ backgroundColor: "#8A5DC6", width: "100px", marginRight: "20px", marginBottom: "30px" }} onClick={handleClickButton}>
                    Cadastrar
                </button>
            </form>
        </div>
    )
}