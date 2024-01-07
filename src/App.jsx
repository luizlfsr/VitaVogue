import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import NovaTarefa from "./components/pages/NovaTarefa";
import Tarefas from "./components/pages/Tarefas";
import { useEffect, useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 100);

    setTimeout(0)
  }, [])
  useEffect(() => {
    const lightModeStorage = localStorage.getItem("lightMode");
    if (lightModeStorage) {
      setToggle(lightModeStorage === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lightMode", toggle);
  }, [toggle]);

  if (loading) {
    return (
      <div className='loading'>
        <div className="loader-circle"></div>
      </div>
    );
  }

  return (
    <div className={toggle ? 'light_mode' : 'dark_mode'}>
      <Router>
        <NavBar toggle={toggle} setToggle={setToggle}/>
        <Container costumClass="min-height">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path='/novatarefa' element={<NovaTarefa />} />
            <Route path="/tarefas" element={<Tarefas />}/>
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
