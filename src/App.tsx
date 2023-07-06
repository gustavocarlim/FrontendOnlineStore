import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import { ShoppingCart } from './pages/ShoppingCart';
import DetailsProduct from './pages/DetailsProduct';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route path="/shoppingcart" element={ <ShoppingCart /> } />
        <Route path="/detailsproduct/:id" element={ <DetailsProduct /> } />
      </Route>
    </Routes>
  );
}

export default App;
