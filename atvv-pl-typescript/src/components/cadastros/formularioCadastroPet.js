import axios from "axios";
import React, { useState } from "react";

export default function FormularioCadastroPet(props) {
    let tema = props.tema

    //salva os valores em um state
    const [values, setValues] = useState({
        cpfTutor: '',
        nome: '',
        raca: '',
        genero: '',
        tipo: ''
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
            cpfTutor: '',
            nome: '',
            raca: '',
            genero: '',
            tipo: ''
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
                        <input type="text" className="form-control" placeholder="CPF do tutor" aria-label="CPF do tutor" aria-describedby="basic-addon1" id="cpfTutor" name="cpfTutor" value={values.cpfTutor} onChange={handleChangeValues} />
                    </div>
                    <div className="input-group mb-3" style={{ width: "600px" }}>
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" id="nome" name="nome" value={values.nome} onChange={handleChangeValues} />
                    </div>
                    <div className="input-group mb-3" style={{ width: "600px" }}>
                        <input type="text" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" id="raca" name="raca" value={values.raca} onChange={handleChangeValues} />
                    </div>
                    <div className="input-group mb-3" style={{ width: "600px" }}>
                        <input type="text" className="form-control" placeholder="Gênero" aria-label="Gênero" aria-describedby="basic-addon1" id="genero" name="genero" value={values.genero} onChange={handleChangeValues} />
                    </div>
                    <div className="input-group mb-3" style={{ width: "600px" }}>
                        <input type="text" className="form-control" placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1" id="tipo" name="tipo" value={values.tipo} onChange={handleChangeValues} />
                    </div>
                    <button className="btn btn-secondary" type="button" style={{ backgroundColor: "#8A5DC6", width: "100px", marginRight: "20px", marginBottom:"30px"}} onClick={handleClickButton}>
                        Cadastrar
                    </button>
                </form>
            </div>
    )
}