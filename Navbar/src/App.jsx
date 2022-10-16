import "./App.css";
import Logo from "./Components/Logo";
import Button from "./Components/Button";
import Link from "./Components/Link";

function App() {

  let data = {
    btn : "Connect",
    logo : "LOGOBAKERY",
    link : ["Products", "Services", "About"],
  }

  return (
    <div className="App">
      <Logo data = {data.logo}/>
      <Link data = {data.link}/>
      <Button data = {data.btn}/>
    </div>


  );
}

export default App;
