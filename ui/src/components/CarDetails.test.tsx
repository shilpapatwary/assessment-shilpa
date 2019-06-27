import Enzyme, {  mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import CarDetails  from './CarDetails';
import { sampleCarData } from '../assets/testData';
import chai from 'chai';

chai.should();

Enzyme.configure({ adapter: new Adapter() });
var wrapper: any; 
describe('<CarsListing />', () => {
    beforeEach(() => {
         wrapper = mount(<CarDetails car={sampleCarData}  ></CarDetails>);
    })
    it('should have a car title', () => {
        wrapper.find('.heading__bold').text().should.equal("Fiat Marea");
    });
    it('should have a button to save to favorites ', () => {
        wrapper.find('button').length.should.equal(1);
    });
    it('should add the product to favourites list', () => {
        localStorage.setItem('favsList', "");
        wrapper.find('button').simulate('click');
        wrapper.state().isFavourite.should.be.true;
        wrapper.find('button').text().should.equal('Remove');
        const favsLocalStorage = localStorage.getItem('favsList') || "";
        favsLocalStorage.should.equal('41400');
    });
})