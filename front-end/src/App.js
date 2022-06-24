
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Nav/NavBar';
import {Route , Routes} from "react-router-dom";
import Ragistration from './Components/Ragistration/Ragistration';
import CityPage from './Components/Courses/Courses';
import StickyFooter from './Components/Footer/Footer'
import Admin from './Components/Admin/Admin';
import StudentDetails from './Components/Admin/StudentDetails';

function App() {
  return (
<>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:city' element={<CityPage/>}/>
        <Route path='/:city/Ragistration' element={<Ragistration/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/admin/StudentDetails' element= {<StudentDetails/>} />
    </Routes>
    <StickyFooter/>

    </>
  );
}

export default App;
