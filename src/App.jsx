import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SideBar from './components/SideBar'
import Header from './components/Header'
import Card from './components/Card'
import Table from './components/Table'
import Button from './components/Button'

function App() {
  

  return (
    <>
       <SideBar/>  
     <Header/>
    <div className='card-wrapper'>
     <Card title='Total Items'  number={285}/>
     <Card title='Pending Items'  number={0}/>
     <Card title='Complete Items'  number={122}/>
     </div> 
    <Table/>
    <div className='button-wrapper'>
    <Button title="Add Items"/>
    <Button title="Delete Items"/></div> 
   
    </>
  )
}

export default App
