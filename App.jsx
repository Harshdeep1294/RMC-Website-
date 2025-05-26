import './app.css';
import { Routes, Route } from 'react-router-dom';
import Signup from "./component/Signup";
import Login from "./component/Login";
import Home from "./component/Home";
import Form from './component/Form';
import HomeIndex from "./component/HomeIndex";
import Place from "./component/Place";
import Press from "./component/PressRelease";
import PressNews from "./component/PressNews";
import Press_News from "./component/Press_News";
import Services from './component/Services';
import Profile from './component/Profile';

import FirstAadhaar from './component/form/aadhaar.png';
import SecondAadhaar from './component/form/Aadhaar.jpeg';
import ThirdAadhaar from './component/form/Aadhaar.pdf'

import fFirst from './component/form/bus1.1.png';
import fSecond from './component/form/bus1.2.png';
import sFirst from './component/form/bus2.1.png';
import sSecond from './component/form/bus2.2.png';
import Thirdbus from './component/form/busPass.pdf';

import FFirst from './component/form/m1.1.png';
import FSecond from './component/form/m1.2.png';
import FThird from './component/form/m1.3.png';
import FForth from './component/form/m1.4.png';
import FFifth from './component/form/m1.5.png';
import FSixth from './component/form/m1.6.png';
import FSeventh from './component/form/m1.7.png';
import FEighth from './component/form/m1.8.png';
import FNineth from './component/form/m1.9.png';
import FTenth from './component/form/m1.10.png';
import SFirst from './component/form/m2.1.png';
import SSecond from './component/form/m2.2.png';
import SThird from './component/form/m2.3.png';
import SForth from './component/form/m2.4.png';
import SFifth from './component/form/m2.5.png';
import Thirdm from './component/form/Marriage.pdf';

function App() {
  const Firstaadhaar = [FirstAadhaar];
  const Secondaadhaar = [SecondAadhaar];

  const Firstbus = [fFirst, fSecond];
  const Secondbus = [sFirst, sSecond];

  const Firstm = [FFirst,FSecond,FThird,FForth,FFifth,FSixth,FSeventh,FEighth,FNineth,FTenth];
  const Secondm = [SFirst,SSecond,SThird,SForth,SFifth];
  return (
    // <Signup />
    // <Login />
    // <div className="container">
      // {/* <Home /> */}
      // {/* <HomeIndex /> */}
    // </div>

    // <div className="container">
    //   <div className="item">Item 1</div>
    //   <div className="item">Item 2</div>
    //   <div className="item">Item 3</div>
    // </div>


    <div>
      <Routes>
          <Route path="/" element={<HomeIndex />} />
          <Route path='/home' element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place" element={<Place />}/>
          <Route path="/press" element={< Press/>}/>

          <Route path='/birthCertificate' element={<Form />} />
          <Route path="/aadhaar" element={<Form first={Firstaadhaar} second={Secondaadhaar} third={ThirdAadhaar}/>} />
          <Route path='/pan' element={<Form />} />
          <Route path='/voterId' element={<Form />} />
          <Route path="/marraigeCertificate" element={<Form first={Firstm} second={Secondm} third={Thirdm}/>} />
          <Route path="/busPass" element={<Form first={Firstbus} second={Secondbus} third={Thirdbus}/>} />

          <Route path="/news1" element={<PressNews />} />
          <Route path="/news2" element={<Press_News />} />
          <Route path="/service" element={<Services />} />
          <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
