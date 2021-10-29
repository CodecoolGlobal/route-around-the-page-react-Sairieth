import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Contacts from './Components/Contacts';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Footer/>
      <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/contacts' component={Contacts}></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
