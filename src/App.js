import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Admin from "./Components/Admin/Admin";
import CheckOut from "./Components/CheckOut/CheckOut";
import Header from "./Components/Header/Header";
import Home from './Components/Home/Home';
import Login from "./Components/Login/Login";
import ManageProduct from "./Components/ManageProduct/ManageProduct";
import Orders from "./Components/Orders/Orders";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
export const ShoeContext = createContext();
function App() {
  const [loggedUser, setLoggedUser] = useState({})
  const [shoeInfo,setShoeInfo] = useState([]);
  return (
    <UserContext.Provider value={[loggedUser,setLoggedUser]}>
      <ShoeContext.Provider value={[shoeInfo,setShoeInfo]}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route  path='/home' component={Home}/>
          <PrivateRoute  path='/checkout'>
            <CheckOut/>
          </PrivateRoute>
          <PrivateRoute  path='/orders'>
            <Orders/>
          </PrivateRoute>
          <PrivateRoute  path='/admin'>
            <Admin/>
          </PrivateRoute>
          <PrivateRoute  path='/manageProduct'>
            <ManageProduct/>
          </PrivateRoute>
          <Route  path='/login' component={Login}/>
        </Switch>
          
      </Router>
      </ShoeContext.Provider>
    </UserContext.Provider>
    
  );
}

export default App;
