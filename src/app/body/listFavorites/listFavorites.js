import React from 'react';

class ListFavorites extends React.Component{
   
    render(){
        console.log(this.props.movie)
      
        
        
        return(
           <div className="favorite-list">
            {this.props.movie.map((movie,index)=>{
            return  <ul  key={index}><li className="favorite-ul">{movie}</li></ul>
                })}
          </div>

        );
    }

}

export default ListFavorites;