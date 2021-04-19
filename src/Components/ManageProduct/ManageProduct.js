import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageProduct = () => {
    const [shoes,setShoes] = useState([]);
    useEffect(()=>{
        fetch('https://serene-hollows-33908.herokuapp.com/shoes')
        .then(res=>res.json())
        .then(data=>setShoes(data))
    },[shoes]);

    const handleDelete =(id)=>{
        fetch(`https://serene-hollows-33908.herokuapp.com/shoes/${id}`,{
            method:'DELETE'
        }).then(res=> res.json())
        .then(data=> console.log('deleted'))
        .catch(err=>console.log(err))  
    }

    return (
        <div className='container-fluid'>
            <aside>
                <Link to='/admin'><h5 style={{color: 'black', textDecoration:'none', marginTop:'30px'}}>Add Product</h5></Link>
                <Link to='/manageProduct'><h5  style={{color: 'black', textDecoration:'none', marginTop:'30px'}}>Manage Product</h5></Link>
            </aside>
            <div className='container mt-3'>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            shoes.map(shoe=>
                            <tr>
                                <td>{shoe.title}</td>
                                <td>1</td>
                                <td>$ {shoe.price}</td>  
                                <td><button onClick={()=>handleDelete(`${shoe._id}`)} className='btn btn-danger'>Delete</button></td>  
                            </tr>) 
                        }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ManageProduct;