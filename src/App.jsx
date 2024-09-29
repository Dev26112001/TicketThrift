
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Navbar.jsx';
import Buy from './Components/BuyNow.jsx';
import Home from './Components/Home.jsx';
import Hello2 from './Components/Sell.jsx';
import Hello3 from './Components/Readmore.jsx';
import Hello4 from './Components/Blog.jsx';
import Hey from './Components/Checkout.jsx';
function App() {

  return (
    <>
    <Router>
    <Nav /> {/* Navbar will be visible on all pages */}
    <Routes>
      <Route path="/" element={<Home />} /> {/* Homepage */}
      <Route path="/buy" element={<Buy />} />
      <Route path="/sell" element={<Hello2 />} />
      <Route path="/readmore" element={<Hello3 />} />
      <Route path="/blog" element={<Hello4 />} />
      <Route path="/checkout" element={<Hey />} />
      <Route path="*" element={<h2>404 - Page Not Found</h2>} /> {/* 404 Page */}
    </Routes>
  </Router>
   
    </>
  )
}

export default App
