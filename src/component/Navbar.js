import React from 'react';
// import { data } from '../data';
import { handleMovieSearch,addMovieToList} from '../actions';


class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
            searchText: ''
        };

        // console.log({props:this.props})
    }
    handleAddToMovies =(movie) =>
    {
      this.props.dispatch(addMovieToList(movie));
      this.setState({
        showSearchResults:false,
        searchText:""
      });
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
        
         
         const {result,showSearchResult}=this.props.search;

        return (
            <div className="nav">
                <div className="search-container">
                    <input placeholder="Enter your Movie..." onChange={this.handleChange} value ={this.state.searchText}/>
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>
                    {
                        showSearchResult &&
                            <div className="search-results">
                                <div className="search-result">
                                    <img src ={result.Poster} alt="search-pic"/>
                                    <div className="movie-info">
                                        <span>{result.Title}</span>
                                        <button onClick={()=>this.handleAddToMovies(result)}>
                                            Add to Movies
                                        </button>
                                    </div>
                                </div>
                            </div>
                    }

                </div>
            </div>
        )
    }
}

export default Navbar;



