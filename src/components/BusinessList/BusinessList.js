import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';



class BusinessList extends React.Component {
    list() {
       const array = [];
       this.props.business.filter((company, index) => {
           if (company.category === this.props.valueType) {
               array.push(<Business key={index} business={company}/>)
           }

           return array;
       });

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