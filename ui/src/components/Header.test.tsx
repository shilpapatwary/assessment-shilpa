import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import Header from './Header';
import chai from 'chai';

chai.should();

Enzyme.configure({ adapter: new Adapter() });
var wrapper: any; 
describe('<Header />', () => {
    beforeEach(() => {
         wrapper = mount(<Header></Header>);
    })
    it('should have a menu list', () => {
        wrapper.find('ul').length.should.equal(1);
    });
    it('should have a logo', () => {
        wrapper.find('img').length.should.equal(1);
    });
})