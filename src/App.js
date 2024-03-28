import LandingPage from './Component/LandingPage';
import UserLogin from './Component/UserLogin';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AdminLogin from './Component/AdminLogin';
import AdminSignUp from './Component/AdminSignUp';
import AdminHomePage from './Component/AdminHomePage';
import Error from './Component/ErrorPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/*' element={<Error />}/>
      <Route path='/admin' element={<AdminLogin/>}/>
      <Route path='/user' element={<UserLogin/>}/>
      <Route path='/adminsignup' element={<AdminSignUp/>}/>
      <Route path='/adminhomepage/*' element={<AdminHomePage/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;