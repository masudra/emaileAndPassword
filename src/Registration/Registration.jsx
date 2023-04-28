import React, { useState } from 'react';
import './Registration.css'
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import app from '../fierbase.config';
import { Link } from 'react-router-dom';


const auth = getAuth(app);

const Registration = () => {

    const [error ,setError]=useState('');
    const [suc ,setSuc]= useState('');

    
    
    const submitFrom =(event)=>{
        event.preventDefault();
        setSuc('');
        setError('');
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name =event.target.name.value;

        // password valedtion

        if(!/(?=.*[!@#$%^&*])/.test(password)){
            setError('plese add some creset')
            return
        }
        else if(!/(?=.*[0-9])/.test(password)){
            setError('add some number')
            return
        }
        else if(password.length<8){
            setError('munimum 8 leter add plese')
            return
        }
        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            const loger =result.user
            console.log(loger)
            setSuc('create suscesfuly')
         event.target.reset();
         sentEmailV(loger)
         updetData(loger,name)

        })

        .catch(error =>{
            console.error(error.message)
            setError(error.message)
        })
    }

    const sentEmailV =(loger)=>{
        sendEmailVerification(loger)
        .then(rej =>{
            alert('plese login')
        })
    }

    const updetData =(user,name)=>{
        updateProfile(user,{
            displayName:name
        })
        .then(()=>{
            

        })
        .catch(error=>{
            setError(error.message)
        })
    }

    // Methord 2
    
    // const emaileCli =(event)=>{
    //   console.log(event.target.value)
    // }


    // const passwordClic =(event)=>{
    //   console.log(event.target.value)
    // }
    
    
    

    return (
        <div className='conteinar'>
            <h1>this is registration</h1>
            <form onSubmit={submitFrom} className='reg-from'>
                <input  type="text"name='name' placeholder='Enter Your Name'required /><br/>
                <input  type="email"name='email' placeholder='Enter Your Email'required /><br/>
                <input  type="password" name='password' placeholder='Enter Your Password'required /><br/>
                <input type="submit" value="Registration Now" />
            <p>{error}</p>
            <p>{suc}</p>
            <p>if you have acount plese login now<Link to="/login">Login</Link></p>
            </form>

            {/* methord 2 */}
        
{/* 
            <form onSubmit={submitFrom} className='reg-from'>
                <input onChange={emaileCli}  type="email"name='email' placeholder='Enter Your Email' /><br/>
                <input onBlur={passwordClic}  type="password" name='password' placeholder='Enter Your Password' /><br/>
                <input type="submit" value="Registration Now" />
            </form> */}
            
        </div>
    );
};

export default Registration;