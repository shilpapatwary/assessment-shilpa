import { AppState, CarDataTypes } from './types';
import { Reducer, AnyAction } from 'redux';

const initialState: AppState = {
    model: undefined,
    colors: undefined,
    manufacturers: undefined,
    selectedPage: undefined,
    selectedCar: undefined,
    hasError: undefined
}

const AppReducer: Reducer<AppState> = (currentState: AppState = initialState, action: AnyAction) => {
    switch(action.type) {
        case CarDataTypes.GET_CARS_CONTENT_ASYNC:
           return getCarsContentReducer(currentState, action);
        case CarDataTypes.GET_COLORS_CONTENT_ASYNC:
           return getColorsContentReducer(currentState, action);
        case CarDataTypes.GET_MANUFACTURERS_CONTENT_ASYNC:
           return getManufacturersContentReducer(currentState, action);
        case CarDataTypes.GET_CAR_DETAILS_ASYNC:
           return getCarDetailsContentReducer(currentState, action);
        case CarDataTypes.APPLY_FILTERS_ASYNC:
           return getCarsContentReducer(currentState, action);
        case CarDataTypes.SORT_BY_MILEAGE_ASYNC:
           return getCarsContentReducer(currentState, action);
        case CarDataTypes.GET_CARS_BY_PAGE_ASYNC:
            return getCarsContentReducer(currentState, action);
        case CarDataTypes.REQUEST_FAILED:
            return requestFailedReducer(currentState, action)
        default:
           return currentState;
    }
}

function getCarsContentReducer(currentState: AppState, action: AnyAction) {
    const data = action.payload || action.data;
    return Object.assign({}, currentState, {model: data});
}

function getColorsContentReducer(currentState: AppState, action: AnyAction) {
    const data = (action.payload && action.payload.colors) || action.data.colors;
    return Object.assign({}, currentState, {colors: data});
}

function getManufacturersContentReducer(currentState: AppState, action: AnyAction) {
    const data = (action.payload && action.payload.manufacturers) || action.data.manufacturers;
    return Object.assign({}, currentState, {manufacturers: data});
}

function getCarDetailsContentReducer(currentState: AppState, action: AnyAction) {
    const data = (action.payload && action.payload.car) || action.data.car;
    return Object.assign({}, currentState, {selectedCar: data});
}

function requestFailedReducer(currentState: AppState, action: AnyAction) {
    return Object.assign({}, currentState, {hasError: true});
}

export default AppReducer;
