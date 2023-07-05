import { useState } from 'react';
import { NavLink } from 'react-router-dom';

type HeaderProp = {
  onSearch: (e:React.FormEvent<HTMLFormElement>, inputValue:string) => void;
};

export default function Header({ onSearch }: HeaderProp) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <header>
      <form onSubmit={ (e) => onSearch(e, inputValue) }>
        <input
          data-testid="query-input"
          type="text"
          id="search"
          value={ inputValue }
          onChange={ handleChange }
        />

        <button data-testid="query-button">Pesquisar</button>
      </form>
      <nav>
        <NavLink data-testid="shopping-cart-button" to="shoppingcart">Carrinho</NavLink>
      </nav>
    </header>
  );
}
