import React from 'react';

import Header from '../../containers/header';
import Footer from '../../containers/footer';
import Restaurants from '../../containers/restaurants';

import './index.scss';

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <Restaurants />
            <Footer />
        </div>
    );
}

export default HomePage;
