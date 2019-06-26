import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import CarInfo  from './CarInfo';
import { sampleCarData } from '../assets/testData';
import chai from 'chai';

chai.should();

Enzyme.configure({ adapter: new Adapter() });
var wrapper: any; 
describe('<CarsListing />', () => {
    beforeEach(() => {
         wrapper = mount(<CarInfo car={sampleCarData}  ></CarInfo>);
    })
    it('should have a car image section', () => {
        wrapper.find('img').length.should.equal(1);
    });
    it('should have a car title', () => {
        wrapper.find('.heading__bold').text().should.equal('Fiat Marea');
    });
    it('should have a link to product page', () => {
        wrapper.find('a').length.should.equal(1);
    });
})