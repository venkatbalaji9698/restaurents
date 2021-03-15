import {
    GET_RESTAURANTS_LIST,
    SET_RESTAURANTS_LIST_RESPONSE
} from '../actions/actionTypes';

const initialState = {
    restaurantsListResponse: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_RESTAURANTS_LIST:
            return {
                ...state,
                restaurantsListResponse: {
                    isLoading: true
                }
            };
        case SET_RESTAURANTS_LIST_RESPONSE:
            return {
                ...state,
                restaurantsListResponse: {
                    isLoading: false,
                    list: action.data
                }
            };
        default:
            return state;
    }
}