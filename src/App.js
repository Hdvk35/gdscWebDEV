// import logo from './logo.svg';
import './App.css';
import  Teams  from "./components/Teams";
import Captain from './components/Captain';
import { useState } from 'react';

function App() {

  // const[count, setCount] = useState(0)
    let count =0;
  function updatecount(){
     count = count+1;
  }
  return (
    <div>
        <p>button click {count} times</p>
        <button onClick={updatecount}>Click ME</button>
    </div>
   
  );
}

export default App;
