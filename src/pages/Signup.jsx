import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../sass/main.scss'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password, Confirm Password:', password, confirmPassword);

    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  return (
    <div className='sigup__container'>
      <h1 className='signup__container--text'>Sign Up</h1>
      <form  className='signupForm' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input className='signupInput'
          type='text'
          id='name'
          value={email}
          onChange={(event) => setName(event.target.value)} required />
          <label htmlFor='email'>Email Address: </label>
          <input className='signupInput'
          type='email'
          id='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)} required />
        <label htmlFor='password'>Password:</label>
        <input className='signupInput'
          type='password'
          id='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)} required />

          <label htmlFor='confirmPassword'>Confirm Password:</label>
          <input type='password' id='confirmPassword' value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required />

          <button type='submit'>Signup</button>
          </form>
    </div>
  )
}

export default Signup