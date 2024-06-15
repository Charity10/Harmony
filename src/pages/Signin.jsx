import React, {useState} from 'react'

const Signin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Email:', email);
    console.log('Password:', password);

    setEmail('');
    setPassword('');
  }

  return (
    <div className='sigin__container'>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)} required />
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)} required />

          <button type='submit'>Signup</button>
          </form>
    </div>
  )
}

export default Signin