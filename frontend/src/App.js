import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Schimbat `Switch` cu `Routes`

import Layout from './hocs/Layout';

import Home from './containers/Home';
import Register from './containers/Register';
import LoginAdmin from './containers/LoginAdmin';
import Dashboard from './containers/Dashboard';

import PrivateRoute from './hocs/PrivateRoute';

import { Provider } from 'react-redux';
import store from './store';

const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Routes> 
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/register' element={<Register />} />
                    <Route exact path='/login-admin' element={<LoginAdmin />} />
                    <Route path='/dashboard' element={<PrivateRoute component={Dashboard} />} />
                </Routes>
            </Layout>
        </Router>
    </Provider>
);

export default App;
