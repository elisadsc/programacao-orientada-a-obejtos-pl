export default function FormularioCadastroCliente(props) {
    let tema = props.tema

    //salva os valores em um state
    const [values, setValues] = useState({
        nome: '',
        nomeSocial: '',
        cpf: '',
        dataCpf: '',
        rg: '',
        dataRg: '',
        ddd: '',
        telefone: ''
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
            nomeSocial: '',
            cpf: '',
            dataCpf: '',
            rg: '',
            dataRg: '',
            ddd: '',
            telefone: ''
        });
    };

    //ação ao clicar no botão de cadastro
    const handleClickButton = () => {
        clearCampos();
        alert('cliente cadastrado')
    }
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" >
            <form className="text-center">
                <div className="input-group mb-3" style={{ width: "600px" }}>
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" id="nome" name="nome" value={values.nome} onChange={handleChangeValues} />
                </div>
                <div className="input-group mb-3" style={{ width: "600px" }}>
                    <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" id="nomeSocial" name="nomeSocial" value={values.nomeSocial} onChange={handleChangeValues} />
                </div>
                <div className="input-group mb-3" style={{ width: "600px" }}>
                    <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" id="cpf" name="cpf" value={values.cpf} onChange={handleChangeValues} />
                </div>
                <div className="input-group mb-3" style={{ width: "600px" }}>
                    <input type="text" className="form-control" placeholder="Data de emissão CPF" aria-label="Data de emissão CPF" aria-describedby="basic-addon1" id="dataCpf" name="dataCpf" value={values.dataCpf} onChange={handleChangeValues} />
                </div>
                <div className="input-group mb-3" style={{ width: "600px" }}>
                    <input type="text" className="form-control" placeholder="RG" aria-label="RG" aria-describedby="basic-addon1" id="rg" name="rg" value={values.rg} onChange={handleChangeValues} />
                </div>
                <div className="input-group mb-3" style={{ width: "600px" }}>
                    <input type="text" className="form-control" placeholder="Data de emissão RG" aria-label="Data de emissão RG" aria-describedby="basic-addon1" id="dataRg" name="dataRg" value={values.dataRg} onChange={handleChangeValues} />
                </div>
                <div className="input-group mb-3 d-flex" >
                    <input style={{ width: "65px", marginRight: '10px' }} type="text" className="form-control flex-grow-0 mr-2" placeholder="DDD" id="ddd" name="ddd" value={values.ddd} onChange={handleChangeValues}
                    />
                    <input
                        style={{ width: "525px" }} type="text" className="form-control flex-grow-0 mr-2" placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" id="telefone" name="telefone" value={values.telefone} onChange={handleChangeValues}
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <button
                        className="btn btn-secondary"
                        type="submit"
                        onClick={handleClickButton}
                        style={{ backgroundColor: "#8A5DC6", width: "100px", marginRight: "20px", marginBottom: "30px" }}
                    >
                        Cadastrar
                    </button>
                </div>
            </form>
        </div>
    )
}