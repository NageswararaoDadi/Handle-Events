
import { useState } from 'react';
import './App.css';

function App() {
  const [isColor, setColor] = useState(true) 
  const [password, setPassword] = useState('')
  const [email,setEmail] = useState('')
  const [message , setMessage] = useState('')

  const mouseEnters = () =>{
      setColor(prevState => (!prevState))
  }
  const regex = /[a-zA-Z0-9.%+-+]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
  const onchangingEmail = (event) =>{
      setEmail(event.target.value)
  }

  const onClickBtn = () =>{
    let emailValidation = regex.test(email)
    let passwordValidation = (password.length >= 5)
    if(emailValidation && passwordValidation){
      //console.log('Email and Password is Valid')
      setMessage('Email and Password is Valid')
    }else if(!emailValidation || email === ''){
      setMessage('Email  is Not Valid')
    }else if(password === '' ||   password.length < 5){
      setMessage('Password is Not Valid')
    }else{
      setMessage('')

    }
  }

  const changePassword = (event) =>{
    setPassword(event.target.value)
  }
  let btnColor = isColor? 'orange' : 'green' 
  let passwordValid = password.length < 5 ? 'error-passowrd input-element':'success-password input-element';
  return (
    <div className="App">
      <header className="App-header">
          <h1 className='head'>Email Verification</h1>
          <div className='input-card'>
              <label className='label-element' htmlFor='email'>Email</label>
              <br />
              <input onChange={onchangingEmail} id='email' type='text' className='input-element' placeholder='Email' /> 
          </div>
          <div className='input-card'>
              <label className='label-element' htmlFor='password'>Password</label>
              <br/>
              <input onChange={changePassword} id='password' type='password' className={passwordValid} placeholder='Password' /> 
          </div>
          <p>{message}</p>
          <button onClick={onClickBtn} style={{backgroundColor:btnColor}} onMouseEnter={mouseEnters} type='button' className='register-btn'>Register</button>
      </header>
    </div>
  );
}

export default App;
