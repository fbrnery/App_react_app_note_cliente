import { Link } from 'react-router-dom';

function Erro() {
    return (
      <div>
        <h1> Hum, parece que esta página não existe ! </h1> <br/>
        <span> Você pode estar procurando: </span><br/>
       
        <Link to="/"> Home </Link><br/>
      <Link to="/contato"> Contatos </Link><br/>
      <Link to="/sobre"> Sobre </Link>
      </div>
    );
  }
  
  export default Erro;