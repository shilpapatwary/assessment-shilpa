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

export function* getCarDetailsAsync(carData: any) {
    try{
        const data: any = yield call(getCarDetailsContent, carData.payload.id);
        yield put({type: CarDataTypes.GET_CAR_DETAILS_ASYNC, data})
    } catch(error){
        console.log("caught error", error);
        yield put({ type: CarDataTypes.REQUEST_FAILED, error });
    }
    
}

function* watchGetCarDetailsContent() {
    yield takeEvery(CarDataTypes.GET_CAR_DETAILS, getCarDetailsAsync)
  }


export function* getColorsContentAsync() {
    const data = yield call(getColorsContent);
    yield put({type: CarDataTypes.GET_COLORS_CONTENT_ASYNC, data});
  }

function* watchGetColorsContent() {
    yield takeEvery(CarDataTypes.GET_COLORS_CONTENT, getColorsContentAsync)
  }

export function* getCarsContentAsync(filterData: any) {
    const data = yield call(getCarsContent, filterData.payload);
    yield put({type: CarDataTypes.GET_CARS_CONTENT_ASYNC, data})
}

function* watchGetCarsContent() {
    yield takeEvery(CarDataTypes.GET_CARS_CONTENT, getCarsContentAsync)
}

export function* watchApplyFiltersAsync(filterData: any) {
    const data = yield call(getCarsContent, filterData.payload.params);
    yield put({type: CarDataTypes.APPLY_FILTERS_ASYNC, data})
}

function* watchApplyFilters() {
    yield takeEvery(CarDataTypes.APPLY_FILTERS, watchApplyFiltersAsync)
}

export function* watchSortMileageAsync(filterData: any) {
    const data = yield call(getCarsContent, filterData.payload.params);
    yield put({type: CarDataTypes.SORT_BY_MILEAGE_ASYNC, data})
}

function* watchSortMileage() {
    yield takeEvery(CarDataTypes.SORT_BY_MILEAGE, watchSortMileageAsync)
}

export function* getCarsByPageAsync(filterData: any) {
    const data = yield call(getCarsContent, filterData.payload.params);
    yield put({type: CarDataTypes.GET_CARS_BY_PAGE_ASYNC, data})
}

function* watchGetCarsByPage() {
    yield takeEvery(CarDataTypes.GET_CARS_BY_PAGE, getCarsByPageAsync)
}

export default function* root() {
    yield fork(watchGetCarsContent)
    yield fork(watchGetColorsContent)
    yield fork(watchGetManufacturersContent)
    yield fork(watchGetCarDetailsContent)
    yield fork(watchApplyFilters)
    yield fork(watchSortMileage)
    yield fork(watchGetCarsByPage)
}