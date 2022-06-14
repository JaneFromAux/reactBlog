import './App.css';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogDetails from './pages/BlogDetails';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/item/:id" element={<BlogDetails />} />
      </Routes>
    </div>
  );
}

export default App;
