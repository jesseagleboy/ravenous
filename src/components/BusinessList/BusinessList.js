import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';



class BusinessList extends React.Component {
    
    list() {
        return this.props.business.map((company) => {
            return <Business key={company.id} business={company} />
        });
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