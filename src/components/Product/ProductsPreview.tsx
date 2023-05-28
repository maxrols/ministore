import React, { useEffect, useState } from 'react'
import Container from '../Container/Container';
import { Link } from 'react-router-dom';
import img from '../../assets/watches.png';
import './productsPreview.scss';
import { getProductsByCategory } from '../../utils/api';
import { ProductsList } from '../../models/ProductsList';

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
            <Link to={''} className='preview__link'>GO TO SHOP</Link>
        </div>
        <ul className="preview__list">
            {productsList.map((item, i) => (
                <Link to={""} className="preview-item" key={item.id}>
                    <img src={item.images[0]} alt={item.title} className='preview-item__img' />
                    <div className="preview-item__footer">
                        <h3 className='preview-item__title'>
                            {item.title}
                        </h3>
                        <p className="preview-item__price">
                            {item.price}$
                        </p>
                    </div>
                </Link>
            ))}
        </ul>
      </Container>
    </section>
  )
}

export default ProductsPreview
