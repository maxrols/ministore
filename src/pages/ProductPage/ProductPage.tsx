import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../components/Container/Container';
import InstaPosts from '../../components/InstaPosts/InstaPosts';
import Subscribe from '../../components/Subscribe/Subscribe';
import { ProductsItem } from '../../models/ProductsList';
import { getProduct } from '../../utils/api';
import ProductInfo from './components/ProductInfo/ProductInfo'

const ProductPage = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<ProductsItem>()


  /* const init = useCallback(async () => {
    const productData = await getProduct(id!);
    setProduct(productData);
  }, [id]); */

  const init = async () => {
    const productData = await getProduct(id!);
    setProduct(productData);
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, [])
  
  return (
    <div>
      {loading
      ? <h3 style={{textAlign: 'center'}}>Loading...</h3>
      : <ProductInfo data={product!}/>
      }
      <Subscribe/>
      <InstaPosts/>
    </div>
  )
}

export default ProductPage
