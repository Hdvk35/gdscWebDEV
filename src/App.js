// import logo from './logo.svg';
import './App.css';
import  Teams  from "./components/Teams";
import Captain from './components/Captain';
import { useState, useEffect } from 'react';

function App() {

  const[count, setCount] = useState(0)
  useEffect(() => {
    console.log("east or west gdsc is best");
  })

  function updatecount(){
     setCount(count +1);
  }
  return (
    <div>
        <p>button click {count} times</p>
        <button onClick={updatecount}>Click ME</button>
    </div>
   
  );
}

export default App;
