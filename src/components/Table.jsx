import { Button } from 'antd'
import { useState } from 'react'

export default function({entries , handleDelete}){


  return(<div>
   <table >
          
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Delete</th>
      
      
  
    </tr>
  </thead>
 <tbody>
   {entries.map((data,index )=>(
    <tr key={index}>
      <td>{data.FirstName}</td>
      <td>{data.LastName}</td>
      <td>{data.Email}</td>
    <td onClick={()=>handleDelete(index)}><Button>Delete</Button></td>
    </tr>
   
  ))}
   
  </tbody>
</table>
    </div>
    )
}