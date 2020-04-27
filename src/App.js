import React from 'react'
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import initializeStore from './Redux/Store/Store'
import AppRoute from './Routing/Routing'
import { history } from './Routing/history'


const InitiateApp = props => {
    const store = initializeStore();
    return (
        <Router history={history} >
            <Provider store={store}>
                <AppRoute />
            </Provider>
        </Router>
    );
};

export default InitiateApp