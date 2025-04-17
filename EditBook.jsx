import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useParams } from 'react-router-dom'
// write a form that taking bookname, authorname, image

function EditBook() {

  const [name, Setname] = useState("")
  const [author, Setauthor] = useState("")
  const [image, Setimage] = useState("")
 const {id}=useParams()
  const navigtor = useNavigate()

  const handlesubmit = async(e) => {
    try{
      e.preventDefault();
   const {data}= await axios.put(`http://localhost:8000/routers/${id}`,{name,author,image})
   console.log(data)
    }catch(e){
      console.log(e)
    }
  }
  return (
    <div>
      <form onSubmit = {handlesubmit}>
        <input type='text' value={name} onChange={(e) => { Setname(e.target.value) }}
          required />
        <input type='text' value={author} onChange={(e) => { Setauthor(e.target.value) }}
          required />
        <input type='url' value={image} onChange={(e) => { Setimage(e.target.value) }}
          required />

        <button type="submit">Submit</button>

      </form>

    </div>
  )
}

export default EditBook
