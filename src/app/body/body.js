import React from 'react';
import './body.css'

import Movie from './movie/movie'
import ListFavorites from './listFavorites/listFavorites';


class Body extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        movies: [],
        favoriteList :[],
        isFavorite: true,
      };

     this.addFavorite = this.addFavorite.bind(this);
    }

 
    componentDidMount() {
      fetch("https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=<<api_key>>")
        .then(res => res.json())
        .then(
          (movie) => {
            this.setState({
              isLoaded: true,
              movies: movie.results
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

   

    addFavorite(pelicula){
         this.setState(state =>({
            isFavorite: this.state.favoriteList.includes(pelicula),
            favoriteList:[...state.favoriteList,pelicula],
             }))
          
    }

  
  
    render() {
        console.log(this.state.isFavorite)
        console.log(this.state.favoriteList)
      if (this.state.error) {
        return <div>Error: {this.state.error.message}</div>;
      } else if (!this.state.isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
        <div className="central">
            <div className="body-component">
            {this.state.movies.map((movie) => {return <Movie favorite={this.addFavorite} key={movie.id} movie={movie}></Movie>})}
            </div>
            
            <div className="list-component">
              <h4>List Favorites</h4>
             <ListFavorites isfavorite={this.state.isFavorite} movie={this.state.favoriteList}></ListFavorites>
             </div>
        </div>
        );
      }
    }
  }

  export default Body;