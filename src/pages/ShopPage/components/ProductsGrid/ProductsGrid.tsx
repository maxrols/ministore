import React, { useEffect, useState, useMemo } from 'react'
import Container from '../../../../components/Container/Container';
import { ProductsList } from '../../../../models/ProductsList';
import { getLimitedProducts } from '../../../../utils/api';
import Product from '../../../../components/Product/Product';
import './productsGrid.scss';
import Filters from '../Filters/Filters';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../app/store';
import { updateProducts } from '../../../../features/products/productsSlice';
import { useParams } from 'react-router-dom';

const Products = () => {
    const productsListStored = useSelector((state: RootState) => state.products.productsList);
    const dispatch = useDispatch();
    const {category} = useParams();
    const [productsData, setProductsData] = useState<ProductsList>([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(9);
    const [page, setPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);

    const getPagesArray = (totalPages: number) => {
        let result = [];
        for (let i = 1; i<= totalPages; i++) {
            result.push(i)
        }
        return result;
    }

    const pagesArr = useMemo(() => getPagesArray(totalPages), [totalPages]);

    const getPageCount = (totalCount: number, limit: number) => {
        return Math.ceil(totalCount / limit);
    }

    const init = async () => {
        let data;
        if (category) {
            data = await getLimitedProducts(limit, limit*(page - 1), category);
        } else {
            data = await getLimitedProducts(limit, limit*(page - 1));
        }
        
        const totalCount = data?.total;
        setTotalCount(totalCount);
        setTotalPages(getPageCount(totalCount, limit));
        setProductsData(data?.products);
        dispatch(updateProducts(data?.products));
    }
    
    const handlePage = (p: number) => {
        setPage(p);
    }

    const handleNext = () => {
        if (page < totalPages) {
            setPage(prev => prev + 1);
        }
    }

    const handlePrev = () => {
        if (page > 1) {
            setPage(prev => prev - 1);
        }
    }

    useEffect(() => {
        init();
    }, [page, category]);

    useEffect(() => {
        window.scrollTo(0,0)
    }, [page]);

    useEffect(() => {
        setProductsData(productsListStored);
    }, [productsListStored])

    useEffect(() => {
        setPage(1);
    }, [category])

  return (
    <section className='products section'>
      <Container>
        <div className="products__wrapper">
            <div className="products-grid">
                <div className="products__header">
                    <p className='products__descr'>
                        Showing {page === 1 ? 1 : (page - 1) * limit}–{page*limit < totalCount ? page * limit : totalCount} of {totalCount} results
                    </p>
                </div>
                <ul className="products-list">
                    {productsData.map((item, i) => (
                        <Product item={item} key={item.id}/>
                    ))}
                </ul>
                <div className="pagination">
                    <button className='pagination-arr' onClick={handlePrev} disabled={page === 1}>{"<"}</button>
                    {pagesArr.map(p => {
                        if (page > 1 && page < totalPages) {
                            if (p >= page - 1 && p <= page + 1) {
                                return (
                                    <button key={p} className={`pagination-btn ${p === page ? 'active' : ''}`} onClick={() => handlePage(p)}>{p}</button>
                                )
                            }
                        } else if (page === 1) {
                            if (p <= page + 2) {
                                return (
                                    <button key={p} className={`pagination-btn ${p === page ? 'active' : ''}`} onClick={() => handlePage(p)}>{p}</button>
                                )
                            }
                        } else {
                            if (p >= page - 2) {
                                return (
                                    <button key={p} className={`pagination-btn ${p === page ? 'active' : ''}`} onClick={() => handlePage(p)}>{p}</button>
                                )
                            }
                        }
                        
                    })}
                    <button className='pagination-arr' onClick={handleNext} disabled={page === totalPages}>{">"}</button>
                </div>
            </div>
            <Filters filter={category ? category : ''}/>
        </div>
      </Container>
    </section>
  )
}

export default Products
