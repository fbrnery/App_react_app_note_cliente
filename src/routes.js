import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Produto from './pages/Produto';

import Header from './component/Header';



const Routes = () => {
  return(
    <BrowserRouter>
     <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sobre" component={Sobre} />
        <Route exact path="/contato" component={Contato} />
        <Route path="/produto/:id" component={Produto} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;