import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <h1 class="bg-black text-white">Hello World!</h1>
    </div>
  )
}

export default App
