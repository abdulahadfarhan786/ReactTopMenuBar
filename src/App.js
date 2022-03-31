import react from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import { Button } from './components/Button';



function App() {
  return (
    <div className="App">
      <Navbar />
      <container>
        <Button>Log in</Button>
      </container>
    </div>
  );

}


export default App;
