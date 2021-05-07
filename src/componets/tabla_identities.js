import {useEffect, useState} from "react";
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../css/styles_identities.css'
import Home from "../App.js";

function Identities(){
    return(
        <div>
         <TxtIdentities/>
        <Date/>
        <TablaIdentities/>
        <Pagination/>
         <Router>
            <Switch>
                <Route path="/home">
                    <Home/>
                </Route>
            </Switch>
        </Router>
        
        </div>
    );
}
function TxtIdentities(){
    return(
        <div className="txt-identi">
            <h1 className="identities-txt is-desktop">Identities</h1>
            <Link to="../home" className="button is-default is-light btn">Log out</Link>
        </div> 
        
    );
}
function Date(){
    return(
        <div className="datefilter">
            <h1>DATE</h1>
        </div>
    );
}

//This is a promise
const getDataFromApi = () => new Promise((resolve => {
    setTimeout(()=> {
        resolve(
            [
                {id: 1, name: 'Pedro', phone: '214123', date: 'today', hour: '1pm',},
                {id: 2, name: 'Juan', phone: '324325', date: 'monday', hour: '5pm',},
                {id: 3, name: 'Alonso', phone: '435432', date: 'saturday', hour: '7pm',},
                {id: 4, name: 'Andre', phone: '346345', date: 'thursday', hour: '2pm',},
                {id: 5, name: 'Miguel', phone: '345345', date: 'Tuesday', hour: '9pm',},
                {id: 6, name: 'Romel', phone: '567465', date: 'sunday', hour: '8pm',}
            ]
        )
    }, 300)
}))

function TablaIdentities(){
    //this is a useState
    //  [value, funtion] value initial
    const [users, setUsers] = useState([])

    //useEffect
    useEffect(() => {
        getDataFromApi().then((users)=> {
            setUsers(users.map(user => { return{...user, isSelected: false }})
            )
            })
    },[setUsers]);

    function checkedHandler(id){
        setUsers(users.map(user => {
            //cuando el id del user sea igual al id
            if(user.id === id){
                console.log(!user.isSelected)
                return {...user, isSelected: !user.isSelected}
            }
            //cuando no, regresa el user como esta
            return user;
        }))
    }
    return(
        <div className="columns is-desktop is-centered tb">
            <table className="table is-desktop is-centered ">
                <thead className="head ">
                    <tr key={users.id}>
                    <th className="check"><input type="checkbox" checked={users.allSelected} onChange={() => checkedHandler(users.id)} ></input></th>
                    <th className="name has-text-grey-lighter" title="Name">Name</th>
                    <th className="phone has-text-grey-lighter"  title="Phone number" >Phone Number</th>
                    <th className="date has-text-grey-lighter" title="Date">Date</th>
                    <th className="hour has-text-grey-lighter" title="Hour">Hour</th>
                    </tr>
                </thead>
            
            <tbody>
               {users.map(user => {
                   return(
                       <tr key={user.id}>
                           <th className="py-4"><input type="checkbox" checked={user.isSelected} onChange={()=> checkedHandler(user.id)}></input></th>
                           <th className="py-4">{user.name}</th>
                           <th className="py-4">{user.phone}</th>
                           <th className="py-4 has-text-grey-light" >{user.date}</th>
                           <th className="py-4 has-text-grey-light">{user.hour}</th>
                       </tr>
                   )
               })} 
            </tbody>
        </table>
    
        </div>
        
        
    );
}

function Pagination(){
    return(
        <div className="pag is-desktop is-centered">
           <ul className ="pagination">
           <li className="previus"><a href="#">❮</a></li>
           <li className="num"><a href="#">1</a></li>
           <li className="next"><a href="#">❯</a></li>
        </ul>

        </div>
    );
}




export default Identities;