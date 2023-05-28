export type ProductsItem = {
    brand: string
    category: string,
    description: string,
    id: number,
    images: string[],
    price: number,
    rating: number,
    title: string
}

export type ProductsList = ProductsItem[]