import './App.css';
import { Route, Routes } from "react-router-dom"
import MainPage from './components/Main/mainPage';
import About from './components/About/aboutPage';
import Navbar from './components/Main/navbar';
import ProductPage from './components/Product/productPage';
import ContactPage from './components/Contact/contactPage';
function App() {

  return (
    <div className="App">
      <header className='w-100'>
        <Navbar/>
      </header>
    <div>
    <Routes>
      <Route path='//mainPage' element={<MainPage/>}/>
      <Route path='//aboutPage' element={<About/>}/>
      <Route path='//productPage' element={<ProductPage/>}/>
      <Route path='//contactPage' element={<ContactPage/>}/>
    </Routes>
    </div>

    </div>
  );
}

export default App;
