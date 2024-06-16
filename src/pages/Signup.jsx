import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../sass/main.scss'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      navigate('/Onboarding')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    })
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  return (
    <div className='signup__container'>
      <h1 className='signup__container--text'>Sign Up</h1>
      <form  className='signupForm' >
        <label htmlFor='name'>Name:</label>
        <input className='signupInput'
          type='text'
          id='name'
          value={name}
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
          <input className='signupInput' type='password' id='confirmPassword' value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required />

          <button onSubmit={handleSubmit} className='signupButton' type='submit'>Sign Up</button>

          <p>Already have an account? <Link className='switch-btn' to="/signin">Sign In</Link></p>
          </form>
    </div>
  )
}

export default Signup