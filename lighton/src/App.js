
import './App.css';
import Jatekter from './components/Jatekter.js';
import {useState} from "react";

function App() {

const [lista,setlista] = useState([true, false, true, false, true, false, true, false, true]);


function katt(adat){
  const slista = [...lista];
  if(slista[adat]==true){

  }
  slista[adat] = !slista[adat];
  setlista([...slista]);

}
  return (
    <div className="App">
      <header className="App-header">LightON</header>
      <article>
        <Jatekter lista={lista} katt={katt}/>
      </article>
    </div>
  );
}

export default App;
