// {
//     type:'ADD_MOVIES',
//     movies:[m1,m2]
// }

//action types 
export const ADD_MOVIES='ADD_MOVIES';
export const ADD_FAVOURITES='ADD_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'; 
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';  


//action creators

export function addMovies(movies){
    return{
        type:ADD_MOVIES,
        movies
    }
}
export function addFavourites(movie){
    return{
        type:ADD_FAVOURITES,
        movie
    }
}

export function removeFromFavourites(movie){
   return {
       type:REMOVE_FROM_FAVOURITES,
        movie
    }
}

export function setShowFavourites(val){
    return {
        type:SET_SHOW_FAVOURITES,
         val
     }
 }

export function handleMovieSearch(movie){
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=c4b6568e&t=${movie}`;

    return function(dispatch){
        fetch(url)
        .then(response=>response.json())
        .then(movie=>{
            console.log("movie",movie);
            //dispatch an action
            // dispatch({ type: 'ADD_SEARCH_RESULT',movie})
        });
    }
    
 }

 