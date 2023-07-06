import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../../services/api';

export default function DetailsProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState();

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
      <Link to="/shoppingcart" data-testid="shopping-cart-button">
        Adicionar ao Carrinho
      </Link>
    </div>
  );
}
