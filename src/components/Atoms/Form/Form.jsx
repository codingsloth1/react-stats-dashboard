
import { useState } from 'react';
import classes from './Form.module.css'

export default function Form({onsubmit , initialData , setInitailData}) {
  
   
      


    function handleChange(e){
        const {name, value} = e.target 
        setInitailData((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    // function handleSubmit(e){
    //     e.preventDefault;
    //     onsubmit(initialData)
    //     setInitailData ({
    //     FirstName:'',
    //     LastName:'',
    //     Email:''
    // })
    // }
   

  return (
    <div className={classes.forms}>
    <form onSubmit={onsubmit}> 
      <h2>Login</h2>

      <div className={classes.controlrow}>
        <div className={classes.controlmargin}>
          <label htmlFor="first name">FirstName</label>
          <input  name="FirstName" value={initialData.FirstName}
          onChange={handleChange}/>
        </div>

        <div className={classes.controlmargin}>
          <label htmlFor="last name">LastName</label>
          <input name="LastName"  value={initialData.LastName}
           onChange={handleChange}/>
          
        </div>
      
         <div className={classes.controlmargin}>
          <label htmlFor="email">Email</label>
          <input  name="Email" value={initialData.Email}
          onChange={handleChange}/>
        </div>

          <div className={classes.button}>
        <button >Submit</button>
        <button>Reset</button>
      </div>
        </div>
      
      
    </form>
    </div>
  );
}