export default function FormularioCadastroProduto(props) {
    let tema = props.tema
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" >
            <form className="text-center">
                <div className="input-group mb-3" style={{ width: "600px" }}>
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3" style={{ width: "600px" }}>
                    <input type="text" className="form-control" placeholder="Valor" aria-label="Valor" aria-describedby="basic-addon1" />
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