import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SideBar from './components/SideBar'
import Header from './components/Header'
import Card from './components/Card'

function App() {
  

  return (
    <>
     <SideBar/>  
     <Header/>
    <div className='card-wrapper'>
     <Card title='Total Items'  number={285}/>
     <Card title='Pending Items'  number={0}/>
     <Card title='Completed Items'  number={122}/>
     </div>
   
    </>
  )
}

export default App
