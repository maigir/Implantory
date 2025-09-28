import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route 
        path='/dashboard' 
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } 
      />
      <Route path='*' element={<Navigate to='/login' />} />
    </Routes>
  );
}

export default App;

