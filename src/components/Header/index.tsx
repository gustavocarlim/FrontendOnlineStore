import { useState } from 'react';

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
    </header>
  );
}
