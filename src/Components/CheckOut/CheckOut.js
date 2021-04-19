import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoeContext, UserContext } from '../../App';

const CheckOut = () => {
    const [shoeInfo,setShoeInfo] = useContext(ShoeContext);
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    const handleCheckOut =()=>{
        const orderItem = {
            name:loggedUser.displayName,
            orderBy: loggedUser.email,
            title: shoeInfo[0]?.title,
            price: shoeInfo[0]?.price,
            date: new Date()
        }
        fetch(`https://serene-hollows-33908.herokuapp.com/orderItem`, {
            method: 'POST',
            body: JSON.stringify(orderItem),
            headers: {
                'Content-Type': 'application/json'
            },
          
        })
    }
    return (
            <div className='container mt-5'>
            <h1>Check Out</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                        
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                shoeInfo.map(shoe=>
                                    <tr>
                                        <td>{shoe.title}</td>
                                        <td>1</td>
                                        <td>$ {shoe.price}</td>
                                    </tr>)

                            }
                            {
                                shoeInfo.map(shoe=>
                                    <tr>
                                        <td colSpan='2'>Total</td>
                                        <td>$ {shoe.price}</td>
                                    </tr>)

                            }
                    </tbody>
                </table>
                <Link to='/orders'><button style={{float:'right'}} onClick={handleCheckOut} className='btn btn-success ml-auto'>Check Out</button></Link>
            </div>
        </div>
    );
};

export default CheckOut;