import { AppState, CarDataTypes } from './types';
import { Reducer, AnyAction } from 'redux';

const initialState: AppState = {
    model: undefined,
    colors: undefined,
    manufacturers: undefined
}

const SmartCheckoutReducer: Reducer<AppState> = (currentState: AppState = initialState, action: AnyAction) => {
    switch(action.type) {
        case CarDataTypes.GET_CARS_CONTENT_ASYNC:
           return getCarsContentReducer(currentState, action);
        case CarDataTypes.GET_COLORS_CONTENT_ASYNC:
           return getColorsContentReducer(currentState, action);
        case CarDataTypes.GET_MANUFACTURERS_CONTENT_ASYNC:
           return getManufacturersContentReducer(currentState, action);
        case CarDataTypes.GET_CAR_DETAILS_ASYNC:
           return getCarDetailsContentReducer(currentState, action);
        case CarDataTypes.APPLY_FILTERS:
           return applyFiltersReducer(currentState, action);
        case CarDataTypes.SORT_BY_MILEAGE:
           return SortByMileageReducer(currentState, action);
        default:
           return currentState;
    }
}

function getCarsContentReducer(currentState: AppState, action: AnyAction) {
    const data = action.payload || action.data;
    return Object.assign({}, currentState, {checkoutContentList: data});
}

function getColorsContentReducer(currentState: AppState, action: AnyAction) {
    const data = (action.payload && action.payload.data) || action.data.data;
    return Object.assign({}, currentState, {addressList: data});
}

function getManufacturersContentReducer(currentState: AppState, action: AnyAction) {
    const data = (action.payload && action.payload.data) || action.data.data;
    return Object.assign({}, currentState, {addressList: data});
}

function getCarDetailsContentReducer(currentState: AppState, action: AnyAction) {
    const data = (action.payload && action.payload.data) || action.data.data;
    return Object.assign({}, currentState, {addressList: data});
}

function applyFiltersReducer(currentState: AppState, action: AnyAction) {
    const data = (action.payload && action.payload.data) || action.data.data;
    return Object.assign({}, currentState, {addressList: data});
}

function SortByMileageReducer(currentState: AppState, action: AnyAction) {
    const data = (action.payload && action.payload.data) || action.data.data;
    return Object.assign({}, currentState, {addressList: data});
}

export default SmartCheckoutReducer;
