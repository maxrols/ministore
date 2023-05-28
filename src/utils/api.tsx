export const getProductsByCategory = async (category: string, limit: number) => {
    const response = await fetch(`https://dummyjson.com/products/category/${category}?limit=${limit}`);
    if (response.status === 200) {
        const productsList = await response.json();
        return productsList.products;
    }
}

export const getAllProducts = async () => {
    const response = await fetch('https://dummyjson.com/products');
    if (response.status === 200) {
        const productsList = await response.json();
        return productsList.products;
    }
}

export const getLimitedProducts = async (count: number = 10, skip: number = 0, category: string = '') => {
    const response = await fetch(`https://dummyjson.com/products${category.length > 0 ? `/category/${category}` : ''}?limit=${count}&skip=${skip}`);
    if (response.status === 200) {
        const productsList = await response.json();
        return {products: productsList.products, total: productsList.total};
    }
}

export const getProduct = async (id:string) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (response.status === 200) {
        const productObj = await response.json();
        return productObj;
    }
}

export const getCategories = async () => {
    const response = await fetch(`https://dummyjson.com/products/categories`);
    if (response.status === 200) {
        const categories = await response.json();
        return categories;
    }
}


