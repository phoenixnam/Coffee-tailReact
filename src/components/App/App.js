import logo from '../../../src/logo.svg';
import './App.css';
import Header from '../Header/Menu';
import Footer from '../Footer/Footer';
import Content from '../Contents/Coffee';
import RegisterForm from '../Contents/Register';
import Login from '../Contents/Login';
import { Route,BrowserRouter, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<RegisterForm/>} />
      <Route path='/home' element={<Content/>} />
    </Routes>
    </BrowserRouter>

   
  );
}

export default App;
