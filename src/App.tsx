import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import { ShoppingCart } from './pages/ShoppingCart';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route path="/shoppingcart" element={ <ShoppingCart /> } />
      </Route>
    </Routes>
  );
}

export default App;
