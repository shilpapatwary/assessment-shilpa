import { takeEvery, put, call, fork } from 'redux-saga/effects';
import {CarDataTypes} from '../redux/types';
import {getCarsContent, getColorsContent, getManufacturersContent, getCarDetailsContent} from './apis';

export function* getManufacturersContentAsync() {
    const data = yield call(getManufacturersContent);
    yield put({type: CarDataTypes.GET_MANUFACTURERS_CONTENT_ASYNC, data})
  }

function* watchGetManufacturersContent() {
    yield takeEvery(CarDataTypes.GET_MANUFACTURERS_CONTENT, getManufacturersContentAsync)
}

export function* getCarDetailsAsync() {
    const data: any = yield call(getCarDetailsContent);
    yield put({type: CarDataTypes.GET_CAR_DETAILS_ASYNC, data})
}

function* watchGetCarDetailsContent() {
    yield takeEvery(CarDataTypes.GET_CAR_DETAILS, getCarDetailsAsync)
  }


export function* getColorsContentAsync() {
    const data = yield call(getColorsContent);
    yield put({type: CarDataTypes.GET_COLORS_CONTENT_ASYNC, data})
  }

function* watchGetColorsContent() {
    yield takeEvery(CarDataTypes.GET_COLORS_CONTENT, getColorsContentAsync)
  }

export function* getCarsContentAsync() {
    const data = yield call(getCarsContent);
    yield put({type: CarDataTypes.GET_CARS_CONTENT_ASYNC, data})
}

function* watchGetCarsContent() {
    yield takeEvery(CarDataTypes.GET_CARS_CONTENT, getCarsContentAsync)
}

export default function* root() {
    yield fork(watchGetCarsContent)
    yield fork(watchGetColorsContent)
    yield fork(watchGetManufacturersContent)
    yield fork(watchGetCarDetailsContent)
}