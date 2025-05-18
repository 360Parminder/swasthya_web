import { Routes, Route } from 'react-router-dom';
import HomeScreen from '../Pages/HomeScreen';
import Features from '../Pages/Features';
import About from '../Pages/About';
import Contact from '../Pages/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomeScreen />} />
      <Route path="/features" element={<Features />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      
      {/* Protected Routes can be added here */}
      
      {/* Fallback Route - 404 */}
      <Route path="*" element={<div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">404 - Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
