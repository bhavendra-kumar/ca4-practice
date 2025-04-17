import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function MyBooks({_id,name, author,image }) {
  console.log(_id)
  const handledelete = async (e)=>{
    try{
    const {data} = await axios.delete(`http://localhost:8000/routers/${_id}`)
    console.log(data)
    }catch(e){
      console.log(e)
    }
  }
    const navigate = useNavigate()
    const handleupdate = (e)=>{
      navigate(`/edit/${_id}`)
    }
  return (
    <div>
      <img src= {image} alt={name}/>
      <p>{name}</p>
      <p>{author}</p>
<button onClick={handleupdate} >edit</button> 
    <button onClick={handledelete}>delete</button> {/* write a function to delete the book */}
    </div>
  )
}


export default MyBooks
