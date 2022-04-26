import './App.css';
import axios from 'axios';
import Cadastro from './pages/cadastro';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/login';
function App() {
 
  axios.get("https://kenziehub.herokuapp.com/users").then((response) => {

  console.log(response)

  })

 
  return (
    <div className="App">
      <Switch>
        <Route exatch path = "/cadastre-se">
      <Cadastro />
        </Route>
        <Route  exatch path = "/login">
      <Login />
        </Route>
        <Route>

        </Route>
      </Switch>
    </div>
  );
}

export default App;
