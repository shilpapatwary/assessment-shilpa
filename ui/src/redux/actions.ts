import { action } from 'typesafe-actions';
import { CarDataTypes, AppState } from './types';

export const getCarsContent = () => action(CarDataTypes.GET_CARS_CONTENT);
export const getCarsContentAsync = (data: AppState ) => action(CarDataTypes.GET_CARS_CONTENT_ASYNC, data);

export const getColorsContent = () => action(CarDataTypes.GET_COLORS_CONTENT);
export const getColorsContentAsync = (data: any ) => action(CarDataTypes.GET_COLORS_CONTENT, data);

export const getManufacturersContent = () => action(CarDataTypes.GET_MANUFACTURERS_CONTENT);
export const getManufacturersAsync = (data: any ) => action(CarDataTypes.GET_MANUFACTURERS_CONTENT_ASYNC, data);

export const getCarDetails = (id: String) => action(CarDataTypes.GET_CAR_DETAILS, id);
export const getCarDetailsContent = (data: any) => action(CarDataTypes.GET_CAR_DETAILS_ASYNC, data);

export const applyFilters = (color: String, manufacturer: String) => action(CarDataTypes.APPLY_FILTERS, {color, manufacturer});
export const sortByMileage = (sortType: String) => action(CarDataTypes.SORT_BY_MILEAGE, sortType);
