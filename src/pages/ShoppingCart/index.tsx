import { useEffect, useState } from 'react';

type CarrProps = {
  title: string;
  price: number;
};

export function ShoppingCart() {
  const [carr, setCarr] = useState<CarrProps[]>([]);
  const items = localStorage.getItem('carrinho');

  useEffect(() => {
    const compras = () => {
      if (items) {
        setCarr(JSON.parse(items));
      }
    };
    compras();
  }, [items]);

  return (
    <div>
      {items ? (
        <div>
          {carr.map((el, index) => (
            <div key={ index }>
              <p data-testid="shopping-cart-product-name">{el.title}</p>
              <p>{el.price}</p>
            </div>
          ))}
          <p data-testid="shopping-cart-product-quantity">
            Quantidade:
            {' '}
            {carr.length}
          </p>
        </div>
      ) : (
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
      )}
    </div>
  );
}
