import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../../services/api';

type ProductProps = {
  title: string;
  thumbnail: string;
  price: number;
  attributes: [];
};

export default function DetailsProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductProps | undefined>();
  const navigate = useNavigate();

  const handleClick = () => {
    let cart = [];
    if (product) {
      const cartItems = localStorage.getItem('carrinho');
      cart = cartItems ? JSON.parse(cartItems) : [];
      cart.push(product);
      localStorage.setItem('carrinho', JSON.stringify(cart));
    }
    navigate('/shoppingcart');
  };

  useEffect(() => {
    const getProduct = async () => {
      if (id) {
        const productData = await getProductById(id);
        setProduct(productData);
      }
    };
    getProduct();
  }, [id]);

  console.log(product);
  if (!product) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1 data-testid="product-detail-name">{product.title}</h1>
      <img
        data-testid="product-detail-image"
        src={ product.thumbnail }
        alt={ product.title }
      />
      <h2 data-testid="product-detail-price">{product.price}</h2>
      <ul>
        {product.attributes.map((attribute: any, index: number) => (
          <li key={ index }>
            <p>
              {attribute.name}
              :
              {' '}
            </p>
            {attribute.value_name}
          </li>
        ))}
      </ul>
      <button data-testid="shopping-cart-button" onClick={ handleClick }>
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
