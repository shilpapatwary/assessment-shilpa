import { action } from 'typesafe-actions';
import { CarDataTypes, AppState } from './types';

export const getCarsContent = (data: any) => action(CarDataTypes.GET_CARS_CONTENT, data);
export const getCarsContentAsync = (data: AppState ) => action(CarDataTypes.GET_CARS_CONTENT_ASYNC, data);

export const getColorsContent = () => action(CarDataTypes.GET_COLORS_CONTENT);
export const getColorsContentAsync = (data: any ) => action(CarDataTypes.GET_COLORS_CONTENT, data);

export const getManufacturersContent = () => action(CarDataTypes.GET_MANUFACTURERS_CONTENT);
export const getManufacturersAsync = (data: any ) => action(CarDataTypes.GET_MANUFACTURERS_CONTENT_ASYNC, data);

export const getCarDetails = (data: any) => action(CarDataTypes.GET_CAR_DETAILS, data);
export const getCarDetailsContent = (data: any) => action(CarDataTypes.GET_CAR_DETAILS_ASYNC, data);

export const applyFilters = (params: any) => action(CarDataTypes.APPLY_FILTERS, {params});
export const applyFiltersAsync = (data: any) => action(CarDataTypes.APPLY_FILTERS_ASYNC, data);

export const sortByMileage = (params: any) => action(CarDataTypes.SORT_BY_MILEAGE, {params});
export const sortByMileageAsync = (data: any) => action(CarDataTypes.SORT_BY_MILEAGE_ASYNC, {data});

export const getCarsByPage = (params: any) => action(CarDataTypes.GET_CARS_BY_PAGE, {params});
export const getCarsByPageAsync = (data: any) => action(CarDataTypes.GET_CARS_BY_PAGE_ASYNC, {data});

