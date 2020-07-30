import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const [nomeCategoria, setNomeCategoria] = useState('Valor inicial');

  

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {nomeCategoria}</h1>

      <form>
        {/*State np React */}
        <label>
          Nome da Categoria:
          <input
            type="text"
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;