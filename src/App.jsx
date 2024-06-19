import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'

import NavigationHeader from "./components/NavigationHeader";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FooterPage from './components/FooterPage';


/*
 * $targetEl: required
 * $triggerEl: optional
 * options: optional
 */

function App() {

  return (
    <Router>
      <NavigationHeader />

      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="" element={<Home />} />
      </Routes>

     <FooterPage/>
    </Router>
  );
}

export default App;
