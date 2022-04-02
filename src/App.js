import './App.css';
import SignUp from './components/Registrationform';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Navbar';
import SignIn from './components/Loginform';
import FireTable from './components/Firedata';

const App = () => {

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// const [data, setData] = useState[];
// const [data, setData] = useState();


            
            // console.log(data);
    return (
    <>
    <Router>
    <Nav></Nav>
      <Routes>
        <Route exact path="/home" element={<FireTable />}/>
        <Route exact path="/login" element={<SignIn />}/>
        <Route exact path="/register" element={<SignUp />}/>
      </Routes>
    </Router>    
    </>
  );
}

export default App;
