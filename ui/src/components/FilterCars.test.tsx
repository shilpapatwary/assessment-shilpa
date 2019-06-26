import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import sinon from 'sinon';
import { FilterCars } from './FilterCars';
import { sampleColorData, sampleManufacturers } from '../assets/testData';
import chai from 'chai';

chai.should();

Enzyme.configure({ adapter: new Adapter() });
var wrapper: any; 
var filterCars: any;
describe('<FilterCars />', () => {
    beforeEach(() => {
        filterCars = sinon.fake();
         wrapper = mount(<FilterCars colors={sampleColorData} manufacturers={sampleManufacturers} filterCars={filterCars} ></FilterCars>);
    })
    it('should call filterCars method with selected color', () => {
       wrapper.find('.dropdown__title').first().simulate('click');
       wrapper.find('.dropdown__menu li').last().simulate('click');
       wrapper.find('.car__filter_button').simulate('click');
       filterCars.calledOnce.should.be.true;
       filterCars.args[0][0].should.equal('blue');
    });
    it('should call filterCars method with selected manufacturer', () => {
       wrapper.find('.dropdown__title').last().simulate('click');
       wrapper.find('.dropdown__menu li').last().simulate('click');
       wrapper.find('.car__filter_button').simulate('click');
       filterCars.calledOnce.should.be.true;
       filterCars.args[0][1].should.equal('Audi');
    });
})