import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';

import { getRestaurantsList } from '../../redux/actions/restaurantsActions';
import FilterTab from '../../components/filter-tab';

import './index.scss';

const Restaurants = () => {
    const dispatch = useDispatch();
    const { restaurantsListResponse } = useSelector(state => ({
        restaurantsListResponse: state.restaurantsReducer.restaurantsListResponse
    }));

    const [restaurantsList, setRestaurantsList] = useState(null);

    useEffect(() => {
        dispatch(getRestaurantsList());
    }, [])

    useEffect(() => {
        if (restaurantsListResponse && restaurantsListResponse.list) {
            setRestaurantsList(restaurantsListResponse.list);
        }
    }, [restaurantsListResponse])

    const onSearch = (val) => {
        console.log(val);
    }

    return (
        <div className="restaurants">
            <FilterTab onSearch={onSearch} />
            {restaurantsListResponse.isLoading &&
                <Spin />
            }
            Restaurants
        </div>
    )
}

export default Restaurants;
