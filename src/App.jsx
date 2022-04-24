import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Timer } from './components/Timer'
import styled from "styled-components"

function App() {
  const [count, setCount] = useState(0)
  const [show, setShow]=useState(true);
  const Button = styled.button`
  padding:  10px 10px ;
  border-radius: 10px ;
  background-color: black;
  border: 1px solid black;
  color: white;

  `;
  return (
    <div className="App">
      {show?<Timer />:""}
      <Button onClick={()=>{
            setShow(!show)
        }}>{show?"Hide":"show"}</Button>
    </div>
  )
}

export default App
