import React from 'react';
import { data } from '../data';
import { handleMovieSearch} from '../actions';


class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showSearchResult:true,
            searchText: ''
        };

        // console.log({props:this.props})
    }

    handleSearch=()=>{
        const { searchText } = this.state;
        // console.log("clicked");

        this.props.dispatch(handleMovieSearch(searchText));
    };

    handleChange=(e)=>{
        this.setState({
            searchText:e.target.value
        });
    };

    render(){
        
         

        return (
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange}/>
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>

                </div>
            </div>
        )
    }
}

export default Navbar;



