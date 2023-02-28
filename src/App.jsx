import React from 'react';
import './index.css'
// ``````````````````````````;
import NavBar from './Components/Navbar';
import Registration from './Components/Resgistration';
import Home from './Components/Home';
import Login from './Components/Login';
// ```````````````````````````;
import {Routes , Route} from 'react-router-dom';
// `````````````````````````````
import Bscs from './Components/Bscs';
import Bba from './Components/Bba';
import Law from './Components/Law';
import BSM from './Components/BSM';
import Bcom from './Components/Bcom';
import LeaderBoard from './Components/LeaderBoard';
import AboutUs from './Components/AboutUs';
import NoticeBoard from './Components/NoticeBoard';
import Answer from './Components/Answer';


// `````````````````````````````
// `````````````````````````````````````
function App() {
  return (
    <>
      <NavBar/>
      
      <Routes> 
        <Route path='/Bscs' element={<Bscs/>}></Route>
        <Route path='/Bba' element={<Bba/>}></Route>
        <Route path='/Law' element={<Law/>}></Route>
        <Route path='/BSM' element={<BSM/>}></Route>
        <Route path='/Bcom' element={<Bcom/>}></Route>
        <Route path='/NoticeBoard' element={<NoticeBoard/>}></Route>
        <Route path='/LeaderBoard' element={<LeaderBoard/>}></Route>
        <Route path='/AboutUs' element={<AboutUs/>}></Route>
        <Route  path='/Answer' element={<Answer/>}></Route>
        <Route path='/Registration' element={<Registration/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route exact path='/' element={<Home/>}></Route>
      </Routes>

      {/* ```````````````````````````````` */}
      
      {/* ```````````````````````````````` */}



      
   </>
  );
}

export default App;
