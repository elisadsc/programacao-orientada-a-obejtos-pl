/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";

export default function BarraNavegacao(props) {
  const [dropdownCadastrarAberto, setDropdownCadastrarAberto] = useState(false);
  const [dropdownConsumirAberto, setDropdownConsumirAberto] = useState(false);
  const [dropdownListagemAberto, setDropdownListagemAberto] = useState(false);
  const [dropdownConsumosAberto, setDropdownConsumosAberto] = useState(false); 

  const alternarDropdownCadastrar = () => {
    setDropdownCadastrarAberto(!dropdownCadastrarAberto);
    setDropdownConsumirAberto(false);
    setDropdownListagemAberto(false);
    setDropdownConsumosAberto(false);
  };

  const alternarDropdownConsumir = () => {
    setDropdownCadastrarAberto(false);
    setDropdownConsumirAberto(!dropdownConsumirAberto);
    setDropdownListagemAberto(false);
    setDropdownConsumosAberto(false);
  };

  const alternarDropdownListagem = () => {
    setDropdownCadastrarAberto(false);
    setDropdownConsumirAberto(false);
    setDropdownListagemAberto(!dropdownListagemAberto);
    setDropdownConsumosAberto(false);
  };

  const alternarDropdownConsumos = () => {
    setDropdownCadastrarAberto(false);
    setDropdownConsumirAberto(false);
    setDropdownListagemAberto(false);
    setDropdownConsumosAberto(!dropdownConsumosAberto);
  };

  const gerarListaBotoes = () => {
    if (props.botoes.length <= 0) {
      return <></>;
    } else {
      let lista = props.botoes.map((valor) => {
        if (valor === "Cadastrar") {
          return (
            <li
              key={valor}
              className={`nav-item dropdown ${
                dropdownCadastrarAberto ? "show" : ""
              }`}
            >
              <a
                className={`nav-link dropdown-toggle ${
                  dropdownCadastrarAberto ? "active" : ""
                } text-white`}
                href="#"
                role="button"
                id="dropdownCadastrar"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded={dropdownCadastrarAberto ? "true" : "false"}
                onClick={alternarDropdownCadastrar}
              >
                {valor}
              </a>
              <ul
                className={`dropdown-menu ${
                  dropdownCadastrarAberto ? "show" : ""
                }`}
                aria-labelledby="dropdownCadastrar"
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => props.seletorView("Cliente", e)}
                  >
                    Cliente
                  </a>
                </li>
              </ul>
            </li>
          );
        } else
        if (valor === "Listagem") {
            return (
              <li
                key={valor}
                className={`nav-item dropdown ${
                  dropdownListagemAberto ? "show" : ""
                }`}
              >
                <a
                  className={`nav-link dropdown-toggle ${
                    dropdownListagemAberto ? "active" : ""
                  } text-white`}
                  href="#"
                  role="button"
                  id="dropdownListagem"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded={dropdownListagemAberto ? "true" : "false"}
                  onClick={alternarDropdownListagem}
                >
                  {valor}
                </a>
                <ul
                  className={`dropdown-menu ${
                    dropdownListagemAberto ? "show" : ""
                  }`}
                  aria-labelledby="dropdownListagem"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={(e) => props.seletorView("Lista clientes", e)}
                    >
                      Lista clientes
                    </a>
                  </li>
                </ul>
              </li>
            );
          } 
          else {
          return (
            <li key={valor} className="nav-item">
              <a
                className="nav-link text-white"
                href="#"
                onClick={(e) => props.seletorView(valor, e)}
              >
                {valor}
              </a>
            </li>
          );
        }
      });

      return lista;
    }
  };

  let tema = props.tema;
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        data-bs-theme="light"
        style={{ backgroundColor: "#8A5DC6", marginBottom: 10 }}
      >
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1" style={{ color: "#faf6f6" }}>
            PetLovers
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">{gerarListaBotoes()}</ul>
          </div>
        </div>
      </nav>
    </>
  );
}
