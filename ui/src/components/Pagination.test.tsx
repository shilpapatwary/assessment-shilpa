import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import sinon from 'sinon';
import { Pagination } from './Pagination';
import { sampleModel } from '../assets/testData';
import chai from 'chai';

chai.should();

Enzyme.configure({ adapter: new Adapter() });
var wrapper: any; 
var getCarsByPage: any
describe('<Pagination />', () => {
    beforeEach(() => {
        getCarsByPage = sinon.fake();
         wrapper = mount(<Pagination pagesCount={10} currentPage={5} getCarsByPage={getCarsByPage} ></Pagination>);
    })
    it('should contain a list of 5 items', () => {
        wrapper.find('li').length.should.equal(5);
    });
    it('should call getCarsByPage with page 6 as arguments on click of Next link', () => {
        wrapper.find('li.next').simulate('click');
        getCarsByPage.calledOnce.should.be.true;
        getCarsByPage.args[0][0].should.equal(6);
    });
    it('should call getCarsByPage with page 4 as arguments on click of Previous link', () => {
        wrapper.find('li.previous').simulate('click');
        getCarsByPage.calledOnce.should.be.true;
        getCarsByPage.args[0][0].should.equal(4);
    });
    it('should call getCarsByPage with page 1 as arguments on click of First link', () => {
        wrapper.find('li').first().simulate('click');
        getCarsByPage.calledOnce.should.be.true;
        getCarsByPage.args[0][0].should.equal(1);
    });
    it('should call getCarsByPage with page 10 as arguments on click of Last link', () => {
        wrapper.find('li').last().simulate('click');
        getCarsByPage.calledOnce.should.be.true;
        getCarsByPage.args[0][0].should.equal(10);
    });

});