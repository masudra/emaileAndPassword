import React, { useRef, useState } from 'react';
import './Login.css'
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../fierbase.config';
import { Link } from 'react-router-dom';

const auth =getAuth(app)



const Login = () => {
    const [error ,setError]= useState('');
    const [susces ,setSusces] =useState('')
    const emailref =useRef();

    const loginClick =(event)=>{
        event.preventDefault()
        const form =event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInWithEmailAndPassword(auth,email,password)
         .then(rejelt =>{
            const user = rejelt.user
            setSusces('susc')
            setError('')

         })
         .catch(error =>{
            setError(error.message)

         })
    }
    const resetPassword =(event)=>{
        const email =(emailref.current.value)
        if(!email){
            alert('josim er mare chod')
            return
        }
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            alert('plese check your email')
        })
        .catch(error=>{
            setError(error.message)
        })

    }


    return (
        <div>
            <form onSubmit={loginClick} className='conteinar'>
                <input className='form-input'ref={emailref} type="email" name='email' placeholder='Enter your email' required /><br/>
                <input className='form-input' type="password" name='password' placeholder='Enter Your Password' required/><br/>
                <input className='form-input' type="submit" value="Login Now" />
            <p>if you have no acount plese registration now<Link to="/registration">Registion</Link></p>
            
   <p onClick={resetPassword}><Link to="">Farget password </Link></p>
            <p>{error}</p>
            <p>{susces}</p>
            </form>
            
        </div>
    );
};

export default Login;