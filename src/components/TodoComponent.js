import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const TodoComponent = () => {
    var [name,setName] = useState("")
   
    var [List,setList] = useState([])
    const PushValue = () =>{
     setList(current => [...current, name])
     setName("")
    }
  return (
    <div className='Background'>
        <Typography variant='h3' className='Head'>To Do Application</Typography>
        <br></br>
      <br></br>
      <TextField variant='outlined'  label='Enter Todo' value={name} onChange={(e)=>setName(e.target.value)} ></TextField>
      <br></br>
      <br></br>
      <Button variant='contained' color='primary' onClick={PushValue}>Add ToDo</Button>
      {List.map((element, index) =>{
        return(
            <div key={index}>
               <Typography><li>{element}</li></Typography>
            </div>
        )
      })}
      
    </div>
  )
}

export default TodoComponent
