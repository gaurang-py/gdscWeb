import logo from './logo.svg';
import './App.css';
import TextComponent from './components/TextComponent';
import Profile from './screens/Profile';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='flex justify-center items-center h-screen bg-blue-100'>
      {/* Login */}
      {/* Register */}

      {/* route == /login <Login />*/}
      {/* route == /register <Register />*/}

<BrowserRouter>
    <Routes >
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register/>} />
    </Routes>
</BrowserRouter>

    {/* <Login/> */}
    {/* <Register/> */}
    </div>
  );
}

export default App;
