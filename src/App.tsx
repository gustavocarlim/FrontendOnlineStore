import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> } />
    </Routes>
  );
}

export default App;
