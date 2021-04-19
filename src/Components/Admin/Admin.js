import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Admin = () => {
    const axios = require('axios').default;
    const { register, handleSubmit, watch, errors } = useForm();
    const [imgURL,setImageURL] = useState();

    const onSubmit = data => {
        const shoeInfo = {
            title: data.title,
            price: data.price,
            img: imgURL
        }
        fetch('https://serene-hollows-33908.herokuapp.com/addShoe',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(shoeInfo)
        }).then(res=>res.json())
        .then(data=> console.log('data posted successfully'))
    };

    const handleImage =(e) =>{
        const imageData = new FormData();
        imageData.set('key','644bb80f343ef5b8e2dc3ddb3aa86402');
        imageData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(response => {
              console.log("response", response.data.data.display_url);
            setImageURL(response.data.data.display_url);
          })
          .catch(error=> {
            console.log(error);
          });
    }

    return (
        <div className='container-fluid'>
            <aside>
                <Link to='/admin'><h5 style={{color: 'black', textDecoration:'none', marginTop:'30px', textAlign:'center'}}>Add Product</h5></Link>
                <Link to='/manageProduct'><h5  style={{color: 'black', textDecoration:'none', marginTop:'30px', marginBottom:'30px', textAlign:'center'}}>Manage Product</h5></Link>
            </aside>
            <div className='container'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input style={{width:'30%'}} className='form-control' name="title" placeholder='Shoe Name' ref={register}/>
                    <br/><input style={{width:'30%'}} className='form-control' name="price" placeholder='Price' ref={register}/>
                    <br/>
                    <input type="file" onChange={handleImage} />
                    <br/><input style={{marginTop:'20px'}} className='btn btn-success' type="submit" value='Add Shoe'/>
                </form>
            </div>
        </div>
    );
};

export default Admin;