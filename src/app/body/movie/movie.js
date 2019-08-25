import React from 'react';
import './movie.css';



class Movie extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            movies:props.movie,
           };
      
      }
       

    render(){
        const imgSrc= "https://image.tmdb.org/t/p/w185";
        let i= document.getElementById('i-movie');
           return( 
            <div className="movie-component">
                
                        <div className="title-movie">
                        <h4>{this.props.movie.title}</h4>
                        </div>  
                    <img src={imgSrc+this.props.movie.poster_path}  alt=""></img>
                    <div><i id="i-movie" className="material-icons">star_border</i></div>
             
                 
            
            </div>
        );
    }
}

export default Movie;