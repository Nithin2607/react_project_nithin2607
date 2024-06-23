import './App.css';
import { Navbar,Nav,Container } from 'react-bootstrap';

import { 
        BrowserRouter,
        Routes,
        Route,
        Link 
      } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/contact';
import Internship from './components/internship';

function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
     <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Almnd</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/internship">Internship</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/internship" element={<Internship/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
      
    </div>
    </BrowserRouter>


  );
}

export default App;
