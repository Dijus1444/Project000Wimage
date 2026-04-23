import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
import './App.css';
import { Contacts } from './Contacts';
import { Home } from './Home';
import Login from './componets/Login';
import { Layout } from './layout/Layout';

function App() {
  return (
  <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home text="home page"/>}/>
      <Route path="news" element={<h1>Greatest news of all time</h1>}/>
      <Route path="about" element={<Contacts color="blue" />}/>
      <Route path="login" element={<Login/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
{/* 
  <Link to="/" style={{color: "black"}}>HOME link</Link>
  <Link to="/contacts" style={{color: "green"}}>CONTACTS link</Link>
  <Link to="/componentsJ" style={{color: "blue"}}>IMAGE link</Link>
  <NavLink to="/news" 
  style={({isActive})=> {return isActive ? { color: "pink"} : {};
}}>
  NEWS link</NavLink>
  <Link to="/xxx" style={{color: "red"}}>USELESS link</Link>
  <Link to="/weather" style={{color: "orange"}}>WEATHER link</Link> */}
  {/* <Route path="/" element={<Home text="elementas atidarytas per rounte sistema"/>} />
      <Route path="/contacts" element={<h1><Contacts color="green"/></h1>}/>
      <Route path="/xxx" element={<h1>I said its useless</h1>}/>
      <Route path="/weather" element={<h1>The weather is good.</h1>}/>
      <Route path="/news" element={<h1>Greatest news of all time</h1>}/>
      <Route path="/componentsJ" element={<ComponentsJ image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiysB4P1BKfbKkqCtbC_lo8kNjtlGtJtJBy0sdYUfCCA&s&ec=121638500"/>}/>*/}