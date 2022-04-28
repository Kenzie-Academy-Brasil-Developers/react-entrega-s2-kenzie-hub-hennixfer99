import "./App.css";
import axios from "axios";
import Cadastro from "./pages/cadastro";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Homepage from "./pages/homepage";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Switch>
        <Route exatch path="/cadastre-se">
          <Cadastro />
        </Route>
        <Route exatch path="/homepage" >
          <Homepage />
        </Route>
        <Route exatch path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
