import logo from './logo.svg';
import './App.css';
import Greet from './component/Hello.tsx';
import Welcome from './component/Welcome.tsx';


function App() {
  return (
    <div className="App">
     <Greet />
     <Welcome/>
    </div>
  );
}

export default App;
