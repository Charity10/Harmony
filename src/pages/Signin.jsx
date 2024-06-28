import React, {useState} from 'react'
import '../sass/main.scss'
import { signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { usePermission } from 'react-permission-role'


const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = usePermission(); 

  const handleSubmit = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      navigate("/user-dashboard")
      console.log(user)
      toast.success('User Logged In Successfully', {position: 'top-center',});
    })
    .catch((error) => {
      const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorCode, errorMessage)
  toast.error(errorMessage, {position: 'bottom-center',});
    });

    setEmail('');
    setPassword('');
  }

  return (
    <div className='signin__container'>
      <h1 className='signin__container--text'><b>Sign In</b></h1>
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
          <ToastContainer />
    </div>
  )
}

export default Signin