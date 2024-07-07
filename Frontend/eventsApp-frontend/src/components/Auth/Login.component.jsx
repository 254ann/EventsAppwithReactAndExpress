import React, {useState, useContext} from 'react'
import { AuthContext } from '../../context/AuthContex'

function LoginComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const {login} = useContext(AuthContext)

    const handleSubmit = (e) =>{
        e.prevantDefault();
        login(email, password);
    };

  return (
    <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
        required
         />

         <input 
         type="password"
         value={password} 
         onChange={(e) => setPassword(e.target.value)}
         placeholder='Password'
         required
         />

         <button type='submit'>Login</button>
    </form>
  )
}

export default LoginComponent
