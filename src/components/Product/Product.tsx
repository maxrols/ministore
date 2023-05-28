import React from 'react';
import './product.scss';
import { Link } from 'react-router-dom';
import { ProductsItem } from '../../models/ProductsList';

type ProductProps = {
    item: ProductsItem
}

const Product = ({item}: ProductProps) => {
  return (
    <Link to={`/product/${item.id}`} className="preview-item" key={item.id}>
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
  )
}

export default Product
