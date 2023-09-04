// import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Executives from './components/Executives';
import Board from './components/Board';
import Blog from './components/Blog';

function App() {
  // const location = useLocation();
  // const history = useHistory();

  // useEffect(() => {
  //   // Listen for changes in the location
  //   const unlisten = history.listen(() => {
  //     // Reload the page when navigating to a new route
  //     window.location.reload();
  //   });

  //   // Clean up the listener when the component unmounts
  //   return () => unlisten();
  // }, [history]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/executives" element={<Executives />} />
        <Route path="/board" element={<Board />} />
        <Route path="/blog" element={<Blog />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
