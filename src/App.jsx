import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ModernHeader from './component/ModernHeader.jsx';
import './App.css';
import './component/Alignment.css';
import Home from './component/Home.jsx';
import About from './component/About.jsx';
import Contact from './component/Contact.jsx';
import Store from './component/Store.jsx';
import Login from './component/Login.jsx';
import Privacy from './component/Privacy.jsx';
import Register from './component/Register.jsx';
import Order from './component/Order.jsx';
import OrderComponent from './component/Ordernow.jsx';
import ModernMenu from './component/ModernMenu.jsx';
import ModernHero from './component/ModernHero.jsx';
import LandingPage from './component/LandingPage.jsx';
const App = () => {
  return (
    <BrowserRouter>
      <div className='modern-app'>
        <ModernHeader />
        <main className='main-content'>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/store" element={<Store />} />
            <Route path="/menu" element={<ModernMenu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/register" element={<Register />} />
            <Route path="/ordernow" element={<OrderComponent />} />
            <Route path="/order/:id" element={<Order />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
