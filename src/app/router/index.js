import React, { Component } from 'react';

import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';

import Loadable from 'react-loadable';

import Loader from '../components/loader';

const Home = Loadable({
    loader: () => import('../pages/home'),
    loading: Loader,
    delay: 300, // default 200 
});

class Router extends Component {
    render() {
        const DOM = (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch >
            </div>
        );

        return (
            DOM
        );
    }
}

export default withRouter(Router);

