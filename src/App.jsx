import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { Contacts } from './Contacts';
import { Home } from './Home';
import { ComponentsJ } from "./ComponentsJ";


function App() {
  return (
    <BrowserRouter>
    <Home text="labas"/>
    <Contacts color="red"/>

  <Link to="/">HOME link</Link>
  <Link to="/contacts">CONTACTS link</Link>
  <Link to="/componentsJ">IMAGE link</Link>


    <Routes>
      <Route path="/" element={<Home text="elementas atidarytas per rounte sistema"/>} />
      <Route path="/contacts" element={<Contacts color="green"/>}/>
      <Route path="/componentsJ" element={<ComponentsJ image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiysB4P1BKfbKkqCtbC_lo8kNjtlGtJtJBy0sdYUfCCA&s&ec=121638500"/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
