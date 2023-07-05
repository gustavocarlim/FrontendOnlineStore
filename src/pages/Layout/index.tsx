import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { getCategories } from '../../services/api';

export default function Layout() {
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
    }

    fetchCategories();
  }, []);

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        <nav>
          <ul>
            {categories.map((category) => (
              <li key={ category.id }>
                <label htmlFor={ `category-${category.id}` } data-testid="category">
                  <input
                    type="radio"
                    id={ `category-${category.id}` }
                    name="category"
                    value={ category.id }
                  />
                  {category.name}
                </label>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
