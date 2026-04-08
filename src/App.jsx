import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SideBar from './components/SideBar/SideBar.jsx'
import { useState } from 'react'
import Layout from './components/Layout/Layout.jsx'


function App() {
  
const [changePages , setChangePages] = useState('1')
  function handleChanges(e){
    setChangePages(e.key)
  }
  return (
    
    <div className='flex gap-[20px] '>
     {/* <div className='w-[20%] bg-[#887997]'> */}
    <div className='w-[20%]'>
       <SideBar activeTab="Products"  handleChanges={handleChanges}/> 
    </div>
    <div className='w-[80%]'>
      <Layout  changepages={changePages}/>
    </div>
       
        
   
     </div>
       
   
   
  )
}

export default App
