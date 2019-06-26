import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import sinon from 'sinon';
import { CarsListing } from './CarsListing';
import { sampleModel } from '../assets/testData';
import chai from 'chai';

chai.should();

Enzyme.configure({ adapter: new Adapter() });
var wrapper: any; 
describe('<CarsListing />', () => {
    beforeEach(() => {
        const sortByMileage = sinon.fake();
        const getCarsByPage = sinon.fake();
         wrapper = mount(<CarsListing model={sampleModel} currentPage={1} sortByMileage={sortByMileage} getCarsByPage={getCarsByPage} ></CarsListing>);
    })
    it('should have a header section', () => {
        wrapper.find('.cars__listing_header').length.should.equal(1);
    });
    it('should have a pagination section', () => {
        wrapper.find('.pagination__list').length.should.equal(1);
    });
    it('should have a car listing section', () => {
        wrapper.find('.cars__listing_main').length.should.equal(1);
    });
})