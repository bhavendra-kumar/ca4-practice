import React, { useEffect } from 'react'
import MyBooks from '../components/MyBooks'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Home() {
    const [book, setBook]=useState([])
    // write a function to get the book from backend and display it 
    const navigate = useNavigate()
    const handlesubmit = (e)=>{
      navigate('/book')

    }
useEffect(()=>{
const abc= async()=>{
const {data}=await axios.get(`http://localhost:8000/routers`)
setBook(data.main)
console.log(data)
}
abc()
},[])
console.log(book)
  return (
    <div>
        <div><button onClick={handlesubmit}>create book</button></div>
       {
      book.map((item, id)=>
      <MyBooks key={id} {...item}/>
      )
     }
    </div>
  )
}

export default Home
