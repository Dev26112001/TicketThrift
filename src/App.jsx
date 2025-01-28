import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import Navbar from './Components/Navbar';
import Buy from "./Components/BuyNow.jsx";
import Home from './Components/Home';
import Hello2 from "./Components/Sell.jsx";
import Hello3 from "./Components/Readmore.jsx";
import Hello4 from "./Components/Blog.jsx";
import Hey from "./Components/Checkout.jsx";
import Event from "./Components/Eventdescription.jsx";
import Profile from './Components/Profile';

// Wrapper component for protected routes
const ProtectedRoute = ({ children }) => {
  return (
    <>
      <SignedIn>
        {children}
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn redirectUrl="/profile" />
      </SignedOut>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/readmore" element={<Hello3 />} />
        <Route path="/blog" element={<Hello4 />} />

        {/* Protected routes */}
        <Route 
          path="/buy" 
          element={
            <ProtectedRoute>
              <Buy />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/sell" 
          element={
            <ProtectedRoute>
              <Hello2 />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/checkout" 
          element={
            <ProtectedRoute>
              <Hey />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/event/:id" 
          element={
            <ProtectedRoute>
              <Event />
            </ProtectedRoute>
          } 
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
