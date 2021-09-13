import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };

        this.sortByOptions = {
            "Best Match": 'best_match',
            "Highest Rated": 'rating',
            "Most Reviewed": 'review_count'
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    
    renderSortByOptions () {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            const sortByOptionsValue = this.sortByOptions[sortByOption];
            return <li className={this.getSortByClass(sortByOptionsValue)} onClick={this.wrapperTool.bind(this, sortByOptionsValue)} key={sortByOptionsValue}>{sortByOption}</li>
        });
    }

    getSortByClass(sortByOption) {
        return sortByOption === this.state.sortBy ? 'active': '';
    }

    handleSortByChange(sortByOption) {
        console.log(`Pre set sortBy: ${this.state.sortBy}`);
        this.setState({sortBy: sortByOption});
        console.log(`Post set sortBy: ${this.state.sortBy}`);
    }

    handleTermChange(e) {
        this.setState({term: e.target.value});
    }

    handleLocationChange(e) {
        this.setState({location: e.target.value});
    }

    handleSearch(e) {
        const term = this.state.term;
        const location = this.state.location;
        const sortBy = this.state.sortBy;
        this.props.searchYelp(term, location, sortBy);
        //e.preventDefault();
    }

    wrapperTool(sortByOption, e) {
        const term = this.state.term;
        const location = this.state.location;
        this.handleSortByChange(sortByOption);
        const truth = term.length > 0 && location.length > 0;
        if (truth) {
            console.log('We are here.');
            this.props.searchYelp(term, location, sortByOption);
        }
    }

    

    render() {
        return (
    <div className="SearchBar">
        <div className="SearchBar-sort-options">
            <ul>
            {this.renderSortByOptions()}
            </ul>
        </div>
        <div className="SearchBar-fields">
            <input onChange={this.handleTermChange} placeholder="Search Businesses" />
            <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
            <a href="#" onClick={this.handleSearch}>Let's Go</a>
        </div>
    </div>
        );
    }


}

export default SearchBar;