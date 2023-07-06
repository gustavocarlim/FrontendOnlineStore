export async function getCategories() {
  try {
    const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const categoriesDate = await categories.json();
    return categoriesDate;
  } catch (error) {
    console.error(error);
  }
}

export async function getProductsFromCategoryAndQuery(
  categoryId: string,
) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  try {
    if (categoryId.includes('MLB')) {
      const responseID = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
      const idData = await responseID.json();
      return idData;
    }
    const responseQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${categoryId}`);
    const queryData = await responseQuery.json();
    return queryData;
  } catch (error) {
    console.error(error);
  }
}

export async function getProductById(PRODUCT_ID: string) {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
  const responseProduct = await fetch(` https://api.mercadolibre.com/items/${PRODUCT_ID}`);
  const data = await responseProduct.json();
  return data;
}
