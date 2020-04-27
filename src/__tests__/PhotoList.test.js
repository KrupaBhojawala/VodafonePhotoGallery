import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import PhotoCard from '../Components/Photos/PhotoCard';
import Pagination from '../Components/Common/Pagination';
import initializeStore from '../Redux/Store/Store';
import ListPhoto from '../Components/Photos/ListPhoto';

configure({adapter: new Adapter()});

const store = initializeStore();
let renderedComponent;

beforeEach(() => {
    renderedComponent = (props = {}) => {
        shallow(<Provider store={store}><ListPhoto /></Provider>);

    }
});

describe('<Add /> rendering', () => {
    it('<PhotoCard> should render undefined', () => {
        expect(renderedComponent(PhotoCard)).toEqual(undefined);
    });
it('<Pagination> should render undefined', () => {
        expect(renderedComponent(Pagination)).toEqual(undefined);
    });
});