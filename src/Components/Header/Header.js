import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

    
const Header = () => {
    const [loggedUser,setLoggedUser]=useContext(UserContext);
    return (
        <div className='container-fluid'>
            <nav className="navbar navbar-expand-lg backgroundStyle">
                <Link className="navbar-brand titleStyle" to="/">Shoe Zone</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <Link className="nav-link navbarStyle" to="/home">Home </Link>
                        <Link className="nav-link navbarStyle" to="/orders">Orders</Link>
                        <Link className="nav-link navbarStyle" to="/admin">Admin</Link>
                        <Link className="nav-link navbarStyle" to="#">Deals</Link>
                        {
                            loggedUser.displayName ? <p className='mt-2'>{loggedUser.displayName}</p> :<Link to='/login'><button className='btn btn-success'>Login</button></Link>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;