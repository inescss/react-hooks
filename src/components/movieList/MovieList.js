import React from 'react'
import MovieCard from '../movieCard/MovieCard'
import PropTypes from 'prop-types';
import './MovieList.css';

const MovieList = ({Movie}) => {
    return (
        
            <div className="wrapper">
            { Movie.map((Movies)=> <MovieCard key={Movies.id} Movies={Movies} />)}
            </div>
        
    );
};
MovieList.propTypes = {
    Movie: PropTypes.array
}
MovieList.defaultProps = {
    Movie: []
};

export default MovieList
