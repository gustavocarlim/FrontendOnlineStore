import { useEffect, useState } from 'react';
import { getCategories } from '../../services/api';

export default function Categories() {
  const [categories, setCategories] = useState<{ id: string; name: string }[]>(
    [],
  );

  useEffect(() => {
    async function fetchCategories() {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
    }

    fetchCategories();
  }, []);
  return (
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
  );
}
