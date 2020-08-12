import React, {useState} from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormFIeld";


function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]) ;
  const valoresIniciais = {
    nome:'',
    descricao: '',
    cor: '',
  }
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) { 
    //chave=descrição, nome, cor
    setValues({
      ...values,
      [chave]: valor, //nome: 'valor' 
    })
  }

  function handleChange(infoEvento){
    setValue(infoEvento.target.getAttribute('name'), infoEvento.target.value
    ); 
   }


  return (
    <PageDefault>
      <h1>Cadastro Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infoEvento) {
        infoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ])
      } }>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange= {handleChange}
        /> 

        <FormField
          label="Descrição"
          type="text"
          name="descricao"
          value={values.descricao}
          onChange= {handleChange}
        /> 

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange= {handleChange}
        /> 

        <button>Cadastrar</button>
      </form>
      <ul>
        {categorias.map((categoria, id)=> {
          return (
            <li key={` ${categoria}${id}`}>
              {categoria.nome}
            </li>
          )
        })
        }
      </ul>
      <Link to="/">Voltar para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
