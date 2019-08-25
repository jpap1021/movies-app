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
        
      };

      
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
  
    render() {
      if (this.state.error) {
        return <div>Error: {this.state.error.message}</div>;
      } else if (!this.state.isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
        <div className="central">
            <div className="body-component">
            {this.state.movies.map((movie) => {return <Movie  isFavorite={this.state.Favorite} favorites={this.addFavorites} key={movie.id} movie={movie}></Movie>})}
            </div>
            
            
            
        </div>
        );
      }
    }
  }

  export default Body;