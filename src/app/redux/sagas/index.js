import { all } from 'redux-saga/effects';
import { restaurantsSaga } from './restaurantsSaga';

export default function* rootSaga() {
    yield all([
        restaurantsSaga()
    ])
}