import { useState } from 'react'
import Routes from "./Route.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes />
    </>
  )
}

export default App
