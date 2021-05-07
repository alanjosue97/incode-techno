import {useEffect, useState} from "react";
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../css/styles_identities.css'
import Home from "../App.js";

function Identities(){
    return(
        <div>
        <TxtIdentities/>
        <TablaIdentities/>
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
        <div>
            <h1 className="identities-txt">Identities <Link to="../home"><button className="btn">button</button></Link></h1>
        </div> 
        
    );
}

//This is a promise
const getDataFromApi = () => new Promise((resolve => {
    setTimeout(()=> {
        resolve(
            [
                {id: 1, name: 'pedro', phone: '214123', date: 'today', hour: '1pm',},
                {id: 2, name: 'juan', phone: '324325', date: 'monday', hour: '5pm',},
                {id: 3, name: 'alonso', phone: '435432', date: 'saturday', hour: '7pm',},
                {id: 4, name: 'andre', phone: '346345', date: 'thursday', hour: '2pm',},
                {id: 5, name: 'miguel', phone: '345345', date: 'Tuesday', hour: '9pm',},
                {id: 6, name: 'romel', phone: '567465', date: 'sunday', hour: '8pm',}
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
        <div>
            <table>
                <thead>
                    <tr key={users.id}>
                    <td className="check"><input type="checkbox" checked={users.allSelected} onChange={() => checkedHandler(users.id)} ></input></td>
                    <td className="name "><element title="Name">Name</element></td>
                    <td className="phone"><element title="Phone number">Phone Number</element></td>
                    <td className="date"><element title="Date">Date</element></td>
                    <td className="hour"><element title="Hour">Hour</element></td>
                    </tr>
                </thead>
            </table>
            <tbody>
               {users.map(user => {
                   return(
                       <tr key={user.id}>
                           <td><input type="checkbox" checked={user.isSelected} onChange={()=> checkedHandler(user.id)}></input></td>
                           <td>{user.name}</td>
                           <td>{user.phone}</td>
                           <td>{user.date}</td>
                           <td>{user.hour}</td>
                       </tr>
                   )
               })} 
            </tbody>
        </div>
    );
}





export default Identities;