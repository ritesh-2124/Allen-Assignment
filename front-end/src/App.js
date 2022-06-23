
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Nav/NavBar';
import {Route , Routes} from "react-router-dom";
import CityPage from './Components/CityPage/CityPage';

function App() {
  return (
<>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:city' element={<CityPage/>}/>
        {/* <Route path='/signIn' element = {<SignUp/>}/>
        <Route path='/LogIn' element={<SignInSide/>}/>
        <Route path='/Home' element={<Home/>} />
        <Route path='/cartpage' element={<Cartpage/>} />
        <Route path='/singalInfo/:id' element={<Singlepage/>}/>
        <Route path='/cartpage/Address' element={<AddressForm/>} />
        <Route path='/category/:category' element={<CatagaryPage/>}/>
        <Route path='/cartpage/Address/chackout' element={<Checkout/>} />
        <Route path='/profile' element={<Profile/>} /> */}
    </Routes>
    

    </>
  );
}

export default App;
