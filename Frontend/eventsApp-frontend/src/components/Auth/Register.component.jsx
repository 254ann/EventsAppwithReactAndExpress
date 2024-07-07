import React, {useState, useContext} from 'react'
import { AuthContext } from '../../context/AuthContex'

function RegisterComponent() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const {register}= useContext(AuthContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
        register(username, email, password);
    }
  return (
    <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input 
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Username'
        required 
        />

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

        <button type='submit'>Register</button>
    </form>
  )
}

export default RegisterComponent
