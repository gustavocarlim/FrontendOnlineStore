import React, { useEffect } from 'react';
import { getCategories } from './services/api'; 
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';

function App() {
  return (
   <Routes>
      <Route path='/' element={<Layout />}>
          
      </Route>
   </Routes>
  )
}

export default App;
