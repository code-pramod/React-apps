import './App.css';
import { useState } from 'react';

function App() {
const[showtext, setshowText] = useState(true);

const toggle=()=>{
  setshowText(!showtext);
}
  return (
   <div className="App">
    <button onClick={toggle}>Show/Hide</button>
   {showtext===true && <h1> Hello Pramod</h1>}
   </div>
  );
  }
export default App;
  
