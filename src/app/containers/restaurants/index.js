import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin, Empty } from 'antd';

import { getRestaurantsList } from '../../redux/actions/restaurantsActions';
import FilterTab from '../../components/filter-tab';
import CardsList from '../../components/cards-list';

import './index.scss';

const Restaurants = () => {
    const dispatch = useDispatch();
    const { restaurantsListResponse } = useSelector(state => ({
        restaurantsListResponse: state.restaurantsReducer.restaurantsListResponse
    }));

    const [restaurantsList, setRestaurantsList] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        // dispatch(getRestaurantsList());
    }, [])

    useEffect(() => {
        if (restaurantsListResponse && restaurantsListResponse.list) {
            setRestaurantsList(restaurantsListResponse.list);
            setLoading(false);
        }
    }, [restaurantsListResponse])

    const onSearch = (val) => {
        const newList = restaurantsListResponse.list.filter(item => {
            if (item.Brand.toLowerCase().includes(val)) {
                return true;
            }
            if (item.Style.toLowerCase().includes(val)) {
                return true;
            }
            if (item.Stars.toString().includes(val)) {
                return true;
            }
            if (item["Top Ten"].toLowerCase().includes(val)) {
                return true;
            }
            return false;
        });
        setRestaurantsList(newList);
    }

    const getContent = () => {
        if (isLoading) {
            return (
                <div className="restaurants_loading">
                    <Spin />
                </div>
            )
        }
        if (restaurantsList.length) {
            return <CardsList restaurantsList={restaurantsList} />;
        }
        return <Empty className="restaurants_no-data" />;
    }

    return (
        <div className="restaurants">
            <FilterTab onSearch={onSearch} />
            {getContent()}
        </div>
    )
}

export default Restaurants;
