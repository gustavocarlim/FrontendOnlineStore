import { useParams } from 'react-router-dom';
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
  return (
    <div>
      <h1>{product?.title}</h1>
      <img src={ product?.thumbnail } alt={ product?.title } />
      <h2>{product?.price}</h2>
      <ul>
        {
          product.attributes.map((el) => (
            <li>{el.name}</li>
            <li>{el.}</li>
          ))
          }
      </ul>
      </div>
  );
}
