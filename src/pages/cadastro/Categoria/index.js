/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormFIeld';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave=descrição, nome, cor
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(infoEvento) {
    setValue(infoEvento.target.getAttribute('name'), infoEvento.target.value);
  }

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infoEvento) {
        infoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <div>
        Loading...
      </div>
      <ul>
        {categorias.map((categoria, id) => (
          <li key={` ${categoria}${id}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>
      <Link to="/">Voltar para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
