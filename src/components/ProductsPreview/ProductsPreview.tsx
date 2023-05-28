import React, { useEffect, useState } from 'react'
import Container from '../Container/Container';
import { Link } from 'react-router-dom';
import './productsPreview.scss';
import { getProductsByCategory } from '../../utils/api';
import { ProductsList } from '../../models/ProductsList';
import Product from '../Product/Product';

type ProductsPreviewProps = {
    category: "smartphones" | "laptops" | "fragrances" | "skincare" | "groceries" | "home-decoration" | "furniture" | "tops" | "womens-dresses" | "womens-shoes" | "mens-shirts" | "mens-shoes" | "mens-watches" | "womens-watches" | "womens-bags" | "womens-jewellery" | "sunglasses" | "automotive" | "motorcycle" | "lighting"
}

const ProductsPreview = ({category}: ProductsPreviewProps) => {

    const [productsList, setProductsList] = useState<ProductsList>([]);

    const initList = async () => {
        const data = await getProductsByCategory(category, 4);
        setProductsList(data);
    }

    useEffect(() => {
        initList();
    }, [])

  return (
    <section className='preview section'>
      <Container>
        <div className="preview__header">
            <h2 className="preview__title title">
                {category}
            </h2>
            <Link to={`/shop/${category}`} className='preview__link'>GO TO SHOP</Link>
        </div>
        <ul className="preview__list">
            {productsList.map((item, i) => (
                <Product item={item} key={item.id}/>
            ))}
        </ul>
      </Container>
    </section>
  )
}

export default ProductsPreview
