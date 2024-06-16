import React, {useState} from 'react'
import '../sass/main.scss'
import { Link } from 'react-router-dom'
const Signin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email:', email);
    console.log('Password:', password);

    setEmail('');
    setPassword('');
  }

  return (
    <div className='signin__container'>
      <h1>Sign In</h1>
      <form className='signinForm' onSubmit={handleSubmit}>
        <label htmlFor='email'>Email:</label>
        <input className='signupInput'
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor='password'>Password:</label>
        <input className='signupInput'
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)} required />

          <button className='signupButton' type='submit'>Sign In</button>

          <p >Don't have an account? <Link  className='switch-btn' to="/signup">Sign up</Link></p>
          
          </form>
    </div>
  )
}

export default Signin