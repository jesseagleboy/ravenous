import React from 'react';
import './SelectorType.css';
import BusinessList from '../BusinessList/BusinessList';

class SelectorType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected: 'none'};
        this.onInput = this.onInput.bind(this);
    }


    onInput (e) {
        this.setState({selected: e.target.value});
    }
    render() {
        return(
            <div className='SelectorType'>
                <div onInput={this.onInput} className='inputSection'>
                    <h2>Select Type</h2>

                    <input type='radio' id='dairy' name='style_type' value='Kosher Dairy' />
                    <label htmlFor='dairy'>Kosher Dairy</label><br/>
                    
                    <input type='radio' id='pizza' name='style_type' value='Kosher Pizza' />
                    <label htmlFor='pizza'>Kosher Pizza</label><br/>
                   
                    <input type='radio' id='italian' name='style_type' value='Italian' />
                    <label htmlFor='italian'>Italian</label><br/>
                </div>
                <BusinessList valueType={this.state.selected} business={this.props.business}/>
            </div>
        );
    }
}

SelectorType.defaultProps = {selected: 'none'};

export default SelectorType;