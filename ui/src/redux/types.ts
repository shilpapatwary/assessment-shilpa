export enum CarDataTypes {
    GET_CARS_CONTENT = '@@types/GET_CARS_CONTENT',
    GET_CARS_CONTENT_ASYNC = '@@types/GET_CARS_CONTENT_ASYNC',
    GET_COLORS_CONTENT = "@@types/GET_COLORS_CONTENT",
    GET_COLORS_CONTENT_ASYNC = "@@types/GET_COLORS_CONTENT_ASYNC",
    GET_MANUFACTURERS_CONTENT = "@@types/GET_MANUFACTURERS_CONTENT",
    GET_MANUFACTURERS_CONTENT_ASYNC = "@@types/GET_MANUFACTURERS_CONTENT_ASYNC",
    GET_CAR_DETAILS = "@@types/GET_CAR_DETAILS",
    GET_CAR_DETAILS_ASYNC = "@@types/GET_CAR_DETAILS_ASYNC",
    APPLY_FILTERS = "@@types/APPLY_FILTERS",
    APPLY_FILTERS_ASYNC = "@@types/APPLY_FILTERS_ASYNC",
    SORT_BY_MILEAGE = "@@types/SORT_BY_MILEAGE",
    SORT_BY_MILEAGE_ASYNC ="@@types/SORT_BY_MILEAGE_ASYNC",
    GET_CARS_BY_PAGE = "@@types/GET_CARS_BY_PAGE",
    GET_CARS_BY_PAGE_ASYNC = "@@types/GET_CARS_BY_PAGE_ASYNC",
    REQUEST_FAILED = '@@types/REQUEST_FAILED'
}

export interface mileageContent{
    number: Number,
    unit: String

}
export interface CarData{
    stockNumber : Number,
    manufacturerName : String,
    modelName : String,
    mileage : mileageContent,
    fuelType : String,
    color : String,
    pictureUrl : String
}
export interface ModelData{
    cars? : CarData[],
    totalPageCount? : Number,
    totalCarsCount? : Number
}

export interface AppState{
    model? : ModelData,
    colors?: Array<String>,
    manufacturers? : Array<String>,
    selectedPage? : Number,
    selectedCar?: CarData,
    hasError?: Boolean
}
