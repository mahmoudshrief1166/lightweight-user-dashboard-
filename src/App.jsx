import { useState } from 'react'
import './App.css'
import SideBar from './layouts/SideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SideBar></SideBar>
    </>
  )
}

export default App
