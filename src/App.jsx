import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <button className="btn btn-active btn-secondary">Button</button>
      <button className="btn btn-active btn-accent">Button</button>

    </div>
  )
}

export default App
