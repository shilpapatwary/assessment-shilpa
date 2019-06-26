//tests
import chai from 'chai';
import store from '.';
import {getCarsContentAsync, getColorsContentAsync, getManufacturersAsync, getCarDetailsAsync, requestFailed} from '../actions';

chai.should();
const sampleModelContent = {
    cars : [],
    totalPageCount : 100,
    totalCarsCount : 1000
};
const sampleColorsContent=["white"];
const sampleManufacturersContent = {
    "manufacturers": [
      {
        "name": "Fiat",
        "models": [
          {
            "name": "Marea"
          }
        ]
      }
    ]
  }
const sampleCarData = {
    "car": {
      "stockNumber": 41400,
      "manufacturerName": "Fiat",
      "modelName": "Marea",
      "mileage": {
        "number": 100141,
        "unit": "km"
      },
      "fuelType": "Diesel",
      "color": "white",
      "pictureUrl": "http://localhost:3001/car.svg"
    }
  }
var params = {
    color: '',
    manufacturer: '',
    sort: '',
    page: ''
}
describe('App store', () => {
    describe('store.dispatch(getCarsContent)', () => {
        it('should get model data for the app', () => {
            const oldModelData = store.getState().model || {};
            oldModelData.should.be.empty;
            store.dispatch(getCarsContentAsync(sampleModelContent));
            const newModelData = store.getState().model || {};
            newModelData.should.not.be.empty;
            newModelData.should.have.property('cars');
            newModelData.should.have.property('totalPageCount');
            newModelData.should.have.property('totalCarsCount');
        });
    });
    describe('store.dispatch(getColorsContent)', () => {
        it('should get colors data for the app', () => {
            const oldColorsData = store.getState().colors || [];
            oldColorsData.should.be.empty;
            store.dispatch(getColorsContentAsync(sampleColorsContent));
            const newColorsData = store.getState().colors || [];
            newColorsData.should.not.be.empty;
            newColorsData.should.have.lengthOf(1);
        });
    });
    describe('store.dispatch(getManufacturersContent)', () => {
        it('should get manufacturers data for the app', () => {
            const oldManufacturersData = store.getState().manufacturers || {};
            oldManufacturersData.should.be.empty;
            store.dispatch(getManufacturersAsync(sampleManufacturersContent));
            const newManufacturersData = store.getState().manufacturers || {};
            newManufacturersData.should.not.be.empty;
            newManufacturersData.should.have.property('manufacturers');
        });
    });
    describe('store.dispatch(getCarDetails)', () => {
        it('should get car details for the app', () => {
            const oldCarData = store.getState().selectedCar || {};
            oldCarData.should.be.empty;
            store.dispatch(getCarDetailsAsync(sampleCarData));
            const newCarData = store.getState().selectedCar || {};
            newCarData.should.not.be.empty;
            newCarData.should.have.property('car');
        });
    });
    describe('store.dispatch(requestFailed)', () => {
        it('should update error state for the app', () => {
            const oldeErrorState = store.getState().hasError || false;
            oldeErrorState.should.be.false;
            store.dispatch(requestFailed("sample error message"));
            const newErrorState = store.getState().hasError || false;
            newErrorState.should.be.true;
        });
    });
})