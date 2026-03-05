import {BrowserRouter ,Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Admin_Login from './Pages/Admin_Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/admin_login' element={<Admin_Login/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
