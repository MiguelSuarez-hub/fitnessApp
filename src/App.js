import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';


import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExcerciseDetail from './pages/ExcerciseDetail';

function App() {
  return (
    <Box width="400px" sx={{ width: { lg: '1440px', md: '900px'}}} m="auto">
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/excercise/:id' element={<ExcerciseDetail />} />
    </Routes>
    <Footer />
    </Box>
  );
}

export default App;
