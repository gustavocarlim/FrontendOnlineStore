import { useEffect, useState } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../../services/api';
import CardsProduct from '../CardsProduct';

export default function Categories() {
  const [categories, setCategories] = useState<{ id: string; name: string }[]>(
    [],
  );
  const [products, setProducts] = useState<any>([]);

  const handleClick = async (Id: string) => {
    if (Id) {
      const productsData = await getProductsFromCategoryAndQuery(Id);
      setProducts(productsData.results);
    }
  };
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
                  onClick={ () => handleClick(category.id) }
                />
                {category.name}
              </label>
            </li>
          ))}
        </ul>
      </nav>
      {products.map((card:any) => (<CardsProduct
        title={ card.title }
        price={ card.price }
        id={ card.id }
        currency_id={ card.currency_id }
        thumbnail={ card.thumbnail }
        key={ card.id }
      />))}
    </div>
  );
}
