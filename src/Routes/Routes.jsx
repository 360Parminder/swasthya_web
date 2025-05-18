import { Routes, Route } from 'react-router-dom';
import HomeScreen from '../Pages/HomeScreen';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomeScreen />} />
      
      {/* Protected Routes can be added here */}
      
      {/* Fallback Route - 404 */}
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
