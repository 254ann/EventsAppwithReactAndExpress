import React, {createContext, useState, useEffect, Children} from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';


const AuthContext = createContext();

const AuthProvider = ({Children}) =>{
  const [user, setUser] = useState(null);
  const navigate
}