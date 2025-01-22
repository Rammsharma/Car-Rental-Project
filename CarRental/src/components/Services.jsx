
import Categories from './categories'
import Footer from './Footer'
import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const Services = () => {

  const navigate = useNavigate();

  const getUser = async () => {
    try {
        const response = await axios.get("http://localhost:6001/login/sucess", { withCredentials: true });

        console.log("response",response)
    } catch (error) {
      navigate("*")
    }
}


useEffect(() => {
  getUser()
}, [])







function Services() {
  return (
    <div>



     <Categories/>
     <Footer/>
    </div>
  )
}}

export default Services
