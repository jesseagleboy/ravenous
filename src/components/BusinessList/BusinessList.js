import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

const list = () => {
    const array = [];
    for (let i = 0; i < 100; i++) {
        array.push(<Business key={`${i}`}/>);
    }
    return array;
}

class BusinessList extends React.Component {
    render (){
        return (
            <div className="BusinessList">
                {list()}
            </div>
        );
    }
}

export default BusinessList;