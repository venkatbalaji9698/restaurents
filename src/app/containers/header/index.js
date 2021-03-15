import React from 'react';
import { StarFilled } from '@ant-design/icons';

import './index.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header_logo">
                <StarFilled className="header_icon" />
                <p className="header_title">TopRamen</p>
                <StarFilled className="header_icon" />
            </div>
        </div>
    )
}

export default Header;
