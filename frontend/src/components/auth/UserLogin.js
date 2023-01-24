import { useState, useEffect } from 'react';
import { TextField, Button, Box, Alert, CircularProgress } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import React from 'react'


const UserLogin = () => {

    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            Email: data.get('Email'),
            Password: data.get('Password')
        }
        if(actualData.Email && actualData.Password){
            try{
                console.log('actualData',actualData)
                setError({status: true, msg: "Login Success", type:"success"})
            }catch (e){
                console.log(e)
            }
            //below code reset the form after subission of form
            // document.getElementById('login-form').reset();

            //belwo code reflect msg on successfull submission of form
        }else{
            setError({status: true, msg:"All Fields Are Required", type:"error"})
        }
    }

  return <>
    <Box component='form' noValidate sx={{ mt: 1 }} id="login-form" onSubmit={handleSubmit}>
        <TextField margin='normal' required fullWidth id='email' name='Email' label='Email Address' />
        <TextField margin='normal' required fullWidth id='password' name='Password' label='Password' type='password' />
        <Box textAlign='center'>
             <Button type='submit' variant='contained' sx={{mt:3, mb:2, px:5}}>Login</Button> 
            
        </Box>
        <NavLink to='/sendpasswordresetemail' >Forgot Password</NavLink>
        { error.status ? <Alert severity={error.type}>{error.msg}</Alert> : '' }
        
    </Box>
  </>
}

export default UserLogin