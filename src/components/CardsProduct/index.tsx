import { Link } from 'react-router-dom';

export type CardsProps = {
  title: string;
  price: number;
  currency_id: string;
  thumbnail: string;
  id: string;
};

export default function CardsProduct({ title,
  price, currency_id, thumbnail, id }: CardsProps) {
  /* if (!id) {
    return <p>Nenhum produto foi encontrado</p>;
  } */
  return (
    <div>
      <Link data-testid="product-detail-link" to={ `/detailsproduct/${id}` } key={ id }>
        <div data-testid="product">
          <h3>{title}</h3>
          <img src={ thumbnail } alt={ title } />
          <p>{`${currency_id}: R$ ${price}`}</p>
        </div>
        <button>Adicionar ao carrinho.</button>
      </Link>
    </div>
  );
}
