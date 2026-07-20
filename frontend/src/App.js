import {BrowserRouter ,Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Admin_Login from './Pages/Admin_Login';
import AdminDashboard from './Pages/AdminDashboard';
import AddCategory from './Pages/AddCategory';
import ManageCategory from './Pages/ManageCategory';
import AddFood from './Pages/AddFood';
import ManageFood from './Pages/ManageFood';
import SearchPage from './Pages/SearchPage';
import Register from './components/Register';
import Login from './components/Login';
import FoodDetail from './Pages/FoodDetail';
import Cart from './Pages/Cart';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/admin_login' element={<Admin_Login/>}></Route>
      <Route path='/admin_dashboard' element={<AdminDashboard/>}></Route>
      <Route path='/add_category' element={<AddCategory/>}></Route>
      <Route path='/manage-category' element={<ManageCategory/>}></Route>
      <Route path='/add-food' element={<AddFood/>}></Route>
      <Route path='/manage-food' element={<ManageFood/>}></Route>
      <Route path='/search' element={<SearchPage/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/food/:id' element={<FoodDetail/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      


    </Routes>
    </BrowserRouter>
  );
}

export default App;
