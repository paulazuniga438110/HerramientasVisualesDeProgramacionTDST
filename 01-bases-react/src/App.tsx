import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicTypes from './components/BasicTypes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BasicTypes />
    </>
  )
}

export default App
