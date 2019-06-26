import chai from 'chai';
import spies from 'chai-spies';
import { call } from 'redux-saga/effects';
import { getCarsContentAsync, getColorsContentAsync, getManufacturersContentAsync, watchApplyFiltersAsync, watchSortMileageAsync,getCarsByPageAsync, getCarDetailsAsync } from '../sagas';
import { getCarsContent, getColorsContent, getManufacturersContent, getCarDetailsContent } from '../apis';

chai.should();
chai.use(spies);
var params = {
    color: '',
    manufacturer: '',
    sort: '',
    page: ''
}
describe('sagas', () => {
    describe('getCarsContent saga', () => {
        it('should call getColorsContent API', () => {
            const getCarsContentSaga = getCarsContentAsync(params);
            const getCarsContentSpy = chai.spy(getCarsContent);
            getCarsContentSaga.next();
            getCarsContentSpy.should.have.been.called;
        })
    })
    describe('getColorsContent saga', () => {
        it('should call getCarsContent API', () => {
            const getColosContentSaga = getColorsContentAsync();
            const getCarsContentSagaValue = getColosContentSaga.next().value || {};
            getCarsContentSagaValue.should.deep.equal(call(getColorsContent));
        })
    })
    describe('getManufacturersContent saga', () => {
        it('should call getManufacturersContent API', () => {
            const getManufacturersContentSaga = getManufacturersContentAsync();
            const getManufacturersContentSagaValue = getManufacturersContentSaga.next().value || {};
            getManufacturersContentSagaValue.should.deep.equal(call(getManufacturersContent));
        });
    });
    describe('watchApplyFilters saga', () => {
        it('should call getCarsContent API', () => {
            params.color = 'white';
            const watchApplyFiltersSaga = watchApplyFiltersAsync({payload:{params}});
            const getCarsContentSpy = chai.spy(getCarsContent);
            watchApplyFiltersSaga.next();
            getCarsContentSpy.should.have.been.called;
         });
    });
    describe('watchSortMileage saga', () => {
        it('should call getCarsContent API', () => {
            params.sort = 'acs';
            const watchSortMileageSaga = watchSortMileageAsync({payload:{params}});
            const getCarsContentSpy = chai.spy(getCarsContent);
            watchSortMileageSaga.next();
            getCarsContentSpy.should.have.been.called;
         });
    });
    describe('getCarsByPage saga', () => {
        it('should call getCarsContent API', () => {
            params.page = '2';
            const getCarsByPageAsyncSaga = getCarsByPageAsync({payload:{params}});
            const getCarsContentSpy = chai.spy(getCarsContent);
            getCarsByPageAsyncSaga.next();
            getCarsContentSpy.should.have.been.called;
         });
    });
    describe('getCarDetails saga', () => {
        it('should call getCarsContent API', () => {
            const getCarDetailsAsyncSaga = getCarDetailsAsync({payload:{id:"10001"}});
            const getCarDetailsContentSpy = chai.spy(getCarDetailsContent);
            getCarDetailsAsyncSaga.next();
            getCarDetailsContentSpy.should.have.been.called;
         });
    });
})

