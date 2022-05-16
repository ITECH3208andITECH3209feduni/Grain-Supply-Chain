import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    
       <NavigationBar/>
    
    </div>
  );
}

export default App;
