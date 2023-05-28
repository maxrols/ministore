import React, {useState, useEffect} from 'react';
import { getCategories, getLimitedProducts } from '../../../../utils/api';
import {useDispatch} from 'react-redux';

import './filters.scss';
import { updateProducts } from '../../../../features/products/productsSlice';
import { useNavigate } from 'react-router-dom';

type FiltersProps = {
  filter: string
}

const Filters = ({filter}: FiltersProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(filter);

    const init = async () => {
        const data = await getCategories();
        setCategories(data);
    }

    const handleFilter = async (item: string) => {
        setCategory(item);
        navigate(`/shop/${item}`)
        const data = await getLimitedProducts(9,0,item);
        dispatch(updateProducts(data?.products));
    }
    
    useEffect(() => {
        init();
    }, [])

  return (
    <div className='filters'>
      <div className="filters-group">
        <h4 className="filters-group__title">
            CATEGORIES
        </h4>
        <button className={`filters-group__item ${filter === '' ? 'active' : ''}`} onClick={() => handleFilter('')}>All</button>
        {categories.map((item, i) => (
            <button className={`filters-group__item ${category === item ? 'active' : ''}`} key={i} onClick={() => handleFilter(item)}>{item}</button>
        ))}
      </div>
    </div>
  )
}

export default Filters
