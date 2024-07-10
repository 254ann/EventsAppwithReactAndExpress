import {useState, useContext} from 'react'
import { AuthContext } from '../../context/AuthContex'

function LoginComponent() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const {login} = useContext(AuthContext)

    const handleSubmit = (e) =>{
        e.prevantDefault();
        login(username, password);
    };

  return (
    <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input 
        type="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username'
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
