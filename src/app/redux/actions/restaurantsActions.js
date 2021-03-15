import {
    GET_RESTAURANTS_LIST,
    SET_RESTAURANTS_LIST_RESPONSE
} from './actionTypes';


export const getRestaurantsList = (data) => ({
    type: GET_RESTAURANTS_LIST,
    data: data
})

export const setRestaurantsListResponse = (list) => ({
    type: SET_RESTAURANTS_LIST_RESPONSE,
    data: list
})
