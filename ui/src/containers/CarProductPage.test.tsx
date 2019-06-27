import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { should } from 'chai';
import sinon from 'sinon';
import {Provider} from 'react-redux';
import { AnyAction, createStore } from 'redux';

import CarProductPage from './CarProductPage';
import initialState from '../redux/test/initialState.json';

should();
Enzyme.configure({ adapter: new Adapter() });

describe('<CarProductPage />', () => {
    it('should dispatch events to reducer to set state of the app', () => {
        const reducer = sinon.fake( (currState: any, action: AnyAction) => {
            return currState;
        });
        const matchParams = {
            params:{
                id: '10000'
            }
        }
        const state = JSON.parse(JSON.stringify(initialState));
        const store = createStore(reducer, state);
        mount(<Provider store={store}><CarProductPage match={matchParams}></CarProductPage></Provider>);
        reducer.callCount.should.equal(2);
    });
})