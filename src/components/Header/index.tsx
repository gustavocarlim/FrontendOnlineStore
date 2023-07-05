import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

type HeaderProp = {
  onSubmit: (e:React.FormEvent<HTMLFormElement>) => void;
};

export default function Header({ onSubmit }: HeaderProp) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <header>
      <form onSubmit={ onSubmit }>
        <input
          type="text"
          id="search"
          value={ inputValue }
          onChange={ handleChange }
        />

        <button>Pesquisar</button>
      </form>
      <nav>
        <NavLink data-testid="shopping-cart-button" to="shoppingcart">Carrinho</NavLink>
      </nav>
    </header>
  );
}
