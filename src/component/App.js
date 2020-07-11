import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addMovies,setShowFavourites} from '../actions';
 


class App extends React.Component { 
  componentDidMount(){
    const { store }=this.props;

    store.subscribe(()=>{
      console.log("updated");
      this.forceUpdate();
    })
    //make api call
    //dispatch action
    store.dispatch(addMovies(data));

    // console.log("state",store.getState());
  }

  isMovieFavourite=(movie)=>{

    const {favourites}=this.props.store.getState();

    const index = favourites.indexOf(movie);

    if(index!== -1){
      // found the movie
      return true;
    }
    // not found the movie
    return false;

  }

  onChangeTab=(val)=>{
    this.props.store.dispatch(setShowFavourites(val))
  }
  
  render(){
    const {list , favourites, showFavourites} = this.props.store.getState();
    console.log("render",this.props.store.getState());

    const displayMovie = showFavourites ? favourites: list;
    return (
      <div className="App">
  
        <Navbar/>
        <div className="main">
  
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={()=> this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick={()=> this.onChangeTab(true)}>Favorites</div>
          </div>
        <div className="list">
          {displayMovie.map((movie,index)=>(
            <MovieCard

              movie={movie}
              key={`movie-${index}`}
              dispatch ={this.props.store.dispatch}
              isMovieFavourite={this.isMovieFavourite(movie)}


            />
          ))}
        </div>
        {displayMovie.length === 0 ? <div className="no-movies">  Sorry !!! No Movies to Show ..</div> : null}
        </div>
       
      </div>
    );
  }
}

export default App;
