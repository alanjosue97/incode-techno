import incode from './assets/incode.svg';
import './css/style_home.css'
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BiometricFace from "./componets/biometric.js";
import TablaIdentities from "./componets/tabla_identities";

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
           <Route path="/componets/tabla_identities">
            <TablaIdentities/>
          </Route>
        </Switch>
       </Router>
      </div>   
  
    )

}

function Home() {
  return (
    <div className="App">
      <header className="incode-header">
        <img src={incode} className="Incode-logo" alt="logo" />
        <br></br>
        <Link to="./componets/biometric"><button className="find-id">Find Identities</button></Link> 
        <br></br>
        <Link to="./componets/tabla_identities"><button className='tabla-id'>Identites</button></Link>
      
      </header>
      
    </div>
    
  );
}

export default App;
