import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';



class BusinessList extends React.Component {
    list() {
        const array = [];
        for (let i = 0; i < 4; i++) {
            array.push(<Business key={i} business={this.props.business[i%this.props.business.length]} />);
         }

        return array;
    }
    
    
    
    render (){
        return (
            <div className="BusinessList">
                {this.list()}
            </div>
        );
    }
}

export default BusinessList;