import React from "react";
import { Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ Movies }) => {
  return (
    
      
        <div className="cardd">
          <img src={Movies.PosterURL} alt="" />
          <div className="descriptions">
            <h1>{Movies.Title}</h1>
            
              <ReactStars
                count={5}
                isHalf={true}
                value={Movies.Rating}
                size={24}
                activeColor="#ffd700"
              />
          
           <Link to={`/${Movies.id}`}><Button variant="primary">Movie Details</Button></Link>
          </div>
        </div>
     
   
  );
};

export default MovieCard;
