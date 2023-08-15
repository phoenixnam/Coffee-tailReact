import logo from '../../../src/logo.svg';
import './App.css';
import Header from '../Header/Menu';
import Footer from '../Footer/Footer';
import Content from '../Contents/Coffee';
import RegisterForm from '../Contents/Register';
import Login from '../Contents/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Switch>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<RegisterForm/>} />
      <Route path='/home' element={<Content/>} />
      </Switch>
    </Router>
  
   
  );
}

export default App;
