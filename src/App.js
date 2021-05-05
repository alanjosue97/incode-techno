import incode from './assets/incode.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BiometricFace from "./componets/biometric.js";

function App(){
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/componets/biometric">
            <BiometricFace/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
        </Switch>
       </Router>
       </div>   
  
    )

}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={incode} className="Incode-logo" alt="logo" />
        <Link to="./componets/biometric"><button className="find-id">Find Identities</button></Link> 
         <Link><button className='tabla-id'>Identites</button></Link>
        <PurebaTxt/>
      </header>
      
    </div>
    
   
  );
}

function PurebaTxt(){
  return <h1>prueba texto</h1>
}
export default App;
