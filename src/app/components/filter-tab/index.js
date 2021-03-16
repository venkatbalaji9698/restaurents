import React from 'react';
import { Input } from 'antd';
import './index.scss';

const { Search } = Input;

const FilterTab = (props) => {
    const { onSearch } = props;
    return (
        <div className="filter-tab">
            <Search
                placeholder="input search text"
                onSearch={onSearch}
                className="filter-tab_search"
            />
        </div>
    )
}

export default FilterTab;
