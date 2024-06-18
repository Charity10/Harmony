import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../sass/main.scss'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebase'
import {setDoc, doc} from 'firebase/firestore';

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  try {
    await createUserWithEmailAndPassword(auth, email, password)
      const user = auth.currentUser;
      console.log(user);
      navigate('/onboarding')
    
    if (user){
    await setDoc(doc(db, 'Users', user.uid), {
      name: name,
      email: user.email,
    }); 
  }
    console.log('User Registered Successfully');
    toast.success('User Registered Successfully', {position: 'top-center',});

    } catch(error) {
      console.error('Error:', error.message);
      toast.error(error.message, {position: 'bottom-center',});
   
  }
  };

  return (
    <div className='signup__container'>
      <h1 className='signup__container--text'>Create an 
        Account
      </h1>
      <form onSubmit={handleSubmit} className='signupForm' >
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

          <button className='signupButton' type='submit'>Sign Up</button>

          <p>Already have an account? <Link className='switch-btn' to="/signin">Sign In</Link></p>
          </form>
    </div>
  )
}

export default Signup