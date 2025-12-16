import { useState } from 'react'
import Hero from "./Hero.jsx";
import Book from "./Book.jsx";


import './App.css'
import Form from './Form.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Hero />
        <Book/>
        <Form/>
      </div>
    </>
  )
}

export default App
