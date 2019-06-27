import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { should } from 'chai';
import sinon from 'sinon';
import {Provider} from 'react-redux';
import { AnyAction, createStore } from 'redux';
import { sampleCarData } from '../assets/testData';

import CarsListingPage from './CarsListingPage';
import CarInfo from '../components/CarInfo';
import initialState from '../redux/test/initialState.json';
import { CarDataTypes } from '../redux/types';

should();
Enzyme.configure({ adapter: new Adapter() });

describe('<CarsListingPage />', () => {
    it('should dispatch events to reducer to set state of the app', () => {
        const reducer = sinon.fake( (currState: any, action: AnyAction) => {
            return currState;
        });
        const state = JSON.parse(JSON.stringify(initialState));
        const store = createStore(reducer, state);
        const wrapper = mount(<Provider store={store}><CarsListingPage></CarsListingPage></Provider>);
        reducer.callCount.should.equal(4);
    });
    it('should dispatch get cars details content action', () => {
        const reducer = sinon.fake( (currState: any, action: AnyAction) => {
            if(action.type.indexOf('@@redux/INIT') === 0){
                return currState;
            }
            (action.type).should.equal(CarDataTypes.GET_CAR_DETAILS_ASYNC);
        });
        const state = JSON.parse(JSON.stringify(initialState));
        createStore(reducer, state);
        const wrapper = mount(<CarInfo car={sampleCarData}></CarInfo>);
        wrapper.find('.car__details_link').first().simulate('click');
        reducer.callCount.should.equal(1);
    });
})