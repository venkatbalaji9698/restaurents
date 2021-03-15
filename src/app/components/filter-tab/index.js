import React from 'react';
import { Input } from 'antd';
import './index.scss';

const { Search } = Input;

const FilterTab = (props) => {
    const { onSearch } = props;
    return (
        <div className="filter-tab">
            <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />

        </div>
    )
}

export default FilterTab;
