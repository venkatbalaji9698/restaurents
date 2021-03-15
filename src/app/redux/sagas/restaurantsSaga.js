
import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects';
import * as dataAccess from '../../utils/ajax';
import * as Actions from '../actions/actionTypes';
import { setRestaurantsListResponse } from '../actions/restaurantsActions';
import { GET_RESTAURANTS_LIST } from '../../constants/api-constants';

const get = async (url, payload) => await dataAccess.get(url, payload);

export function* getRestaurantsList() {
    let url = GET_RESTAURANTS_LIST;
    try {
        const response = yield call(get, url);
        yield put(setRestaurantsListResponse(response));
    } catch (error) {
        yield put(setRestaurantsListResponse(error))
    }
}

export function* restaurantsSaga() {
    yield takeLatest(Actions.GET_RESTAURANTS_LIST, getRestaurantsList);
}
