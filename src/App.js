
import './App.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

        <Route
              path="/"
              element={
                <>
                  <Home />
                  <About />
                  <Works />
                  <Contact />
                </>
              }
            />

         
          <Route path='*' element={"404 not found"}  />

        </Routes>
        <Footer />
      </BrowserRouter>



    </>
  );
}

export default App;
