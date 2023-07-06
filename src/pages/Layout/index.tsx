import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../components/Header';
import Categories from '../../components/Categories';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import CardsProduct, { CardsProps } from '../../components/CardsProduct';

export default function Layout() {
  const [inputSearch, setInputSearch] = useState<string>('');
  const [cardProduct, setCardProduct] = useState<CardsProps[]>();
  const queryFetch = async () => {
    const queryData = await getProductsFromCategoryAndQuery(inputSearch);
    setCardProduct(queryData.results);
  };

  const onSearch = (e: React.FormEvent<HTMLFormElement>, inputValue:string) => {
    e.preventDefault();
    setInputSearch(inputValue);
    queryFetch();
  };

  return (
    <>
      <div>
        <Header onSearch={ onSearch } />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Outlet />
      </div>
      <div>
        <Categories />
        {cardProduct && cardProduct.map((card) => (<CardsProduct
          title={ card.title }
          price={ card.price }
          id={ card.id }
          currency_id={ card.currency_id }
          thumbnail={ card.thumbnail }
          key={ card.id }
        />))}
      </div>
    </>
  );
}
