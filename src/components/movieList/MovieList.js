import React from 'react'
import MovieCard from '../movieCard/MovieCard'
import PropTypes from 'prop-types';

const MovieList = ({Movie}) => {
    return (
        <div className="container">
            <div className="row ml-5">
            { Movie.map((movies,index )=> <MovieCard key={movies.id} movies={movies} />)}
            </div>
        </div>
    );
};
MovieList.propTypes = {
    movie: PropTypes.array
}
MovieList.defaultProps = {
    movie: []
};

export default MovieList
