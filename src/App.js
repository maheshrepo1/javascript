import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Prolist from './components/pages/product';
import Plist from './components/pages/plist';
import Ulist from './components/pages/ulist';
import Partlist from './components/pages/parts';
import Pccrud from './pages/setup/category/index';
import Jestbtn from './pages/setup/jestbtn/Jestbtn';
import Chkall from './pages/setup/category/checkall';
import AddMore from './pages/setup/category/addmore';
import Productlist from './pages/setup/category/productlist';
import Callthree from './components/Callthree';
import UseCont from './components/UseContext';
import Hoc from './components/Hoc';
import Login from './pages/setup/login/login';
import Nav from './Nav';
import Header from './Header';
import LoginHeader from './LoginHeader';
import Footer from './Footer';
import Template from './Template';

localStorage.setItem('user_id', 0);
let user_id  = localStorage.getItem('user_id');

function App() {
  return (
    <div className="App"> mahesh malik
      <BrowserRouter>
        {user_id > 0 ?  <Header /> : <LoginHeader/> }
        <Routes>
          <Route path="pccrud" element={<Pccrud />} />
          <Route path="btntest" element={<Jestbtn />} />
          <Route path="product" element={<Prolist />} />
          <Route path="plist" element={<Plist />} />
          <Route path='ulist' element={<Ulist />} />
          <Route path="partlist" element={<Partlist />} />
          <Route path="chkall" element={<Chkall />} />
          <Route path="addmore" element={<AddMore />} />
          <Route path="callthree" element={<Callthree />} />
          <Route path="usecont" element={<UseCont />} />
          <Route path="hoc" element={<Hoc />} />
          <Route path="loginp" element={<Login />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;
