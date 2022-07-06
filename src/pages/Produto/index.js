import { useParams } from 'react-router-dom';

function Produto() {
    const { id } = useParams();

    return (
      <div>
        <h1> Página de Produtos </h1><br/>
        <span> Produto Selecionado: {id} </span><br/>
       </div>
    );
  }
  
  export default Produto;