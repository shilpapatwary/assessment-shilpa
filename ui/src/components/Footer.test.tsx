import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import Footer from './Footer';
import chai from 'chai';

chai.should();

Enzyme.configure({ adapter: new Adapter() });
var wrapper: any; 
describe('<Footer />', () => {
    beforeEach(() => {
         wrapper = mount(<Footer></Footer>);
    })
    it('should text equal to © AUTO1 Group 2018', () => {
        wrapper.find('span').text().should.equal("© AUTO1 Group 2018");
    });
})