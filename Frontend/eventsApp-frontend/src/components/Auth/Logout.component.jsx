import React, {useContext} from 'react'
import { AuthContext } from '../../context/AuthContex'

function LogoutComponent() {
    const {logout} = useContext(AuthContext);

  return <button onClick={logout}>Logout</button>
}

export default LogoutComponent
