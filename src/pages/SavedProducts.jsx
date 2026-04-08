
import Header from '../components/Atoms/Header/Header.jsx'
import Card from '../components/Card.jsx'

import { useState } from 'react'
import Table from '../components/Table.jsx'
 import Button from '../components/Atoms/Button/Button.jsx'
 import Form from '../components/Atoms/Form/Form.jsx'


export default function SavedProducts(){
   const [initialData , setInitailData] = useState({
        FirstName:'',
        LastName:'',
        Email:''
    })


  const [entries , setEntries] = useState([])
   const [isform , setForm] = useState(false)
  

   function handleSubmitForm(){
    setEntries((prev)=>[...prev , initialData])
    setForm(false)
      setInitailData ({
        FirstName:'',
        LastName:'',
        Email:''
    })
}
  function handleDelete(index){
    const deleteData = entries.filter((_,i)=> i !== index )
    setEntries(deleteData)
  }
 
   return(
        <div>
          
        <Header/>
         <div className='flex gap-[5px] '>
          <Card title='Total Items'  number={285}/>
          <Card title='Pending Items'  number={0}/>
          <Card title='Complete Items'  number={122}/>
          </div> 
           <div className='button-wrapper'>
      <Button type='primary' title="Add Items"  onClick={()=>setForm(true)}  />
         <Button type='secondary' title="Delete Items" /></div>
         
        {isform ? (
          <Form onsubmit={handleSubmitForm} initialData={initialData} 
          setInitailData={setInitailData} />
        ):(
          <Table entries={entries} handleDelete={handleDelete}/>
        )}

         
                 
        </div>
    )
}