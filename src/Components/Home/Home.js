import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoeContext } from '../../App';
import './Home.css';

const Home = () => {
    const [shoeInfo, setShoeInfo] = useContext(ShoeContext)
    const [shoes,setShoes] = useState([]);
    useEffect(()=>{
        fetch('https://serene-hollows-33908.herokuapp.com/shoes')
        .then(res=>res.json())
        .then(data=>setShoes(data))
    },[shoes]);

    const handleBuy = (id) =>{
        fetch(`https://serene-hollows-33908.herokuapp.com/shoes/${id}`)
        .then(res=> res.json())
        .then(data=> {
            setShoeInfo(data);
        })
        .catch(err=>console.log(err))

    }

    return (
        <div className='container-fluid'>
            <div className='align-items-center searchDivStyle'>
                <form className="form-inline m-5">
                    <input className="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" placeholder="Search for a shoe">Search</button>
                </form>
            </div>
            <div className='row'>
                {
                    shoes.length === 0 &&   <div className="spinner-border container text-success" style={{width: '3rem', height: '3rem'}} role="status">
                    <span className="sr-only">Loading...</span>
                  </div> 
                }
                {
                    shoes.map(shoe => 
                        
                    <div className='col-md-3 m-4'>
                        <div className="card mb-2" style={{width: "370px",height:"430px"}}>
                            
                            <img src={shoe.img} style={{height:'300px', width:'300px'}} className="card-img-top  m-auto" alt="shoeImage"/>
                            <div className="card-body">
                                <h5 className="card-title">{shoe.title}</h5>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <h6>Price: ${shoe.price}</h6>
                                    </div>
                                    <div>
                                        <Link to='/checkout' onClick={()=>handleBuy(`${shoe._id}`)} className="btn btn-success">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;