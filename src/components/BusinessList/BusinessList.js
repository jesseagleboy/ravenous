import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';
import { array } from 'prop-types';

const list = () => {
    const array = [];
    for (let i = 0; i < 10; i++) {
        array.push(<Business />);
    }

    return array;
}

class BusinessList extends React.Component {
    render (){
        return (
            <div class="BusinessList">
                {list}
            </div>
        );
    }
}

export default BusinessList;