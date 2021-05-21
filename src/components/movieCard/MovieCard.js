import React from 'react'
import { Button, Card } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";

const MovieCard = ({movies}) => {
    return (
        <Card className='image-container d-flex justify-content-start m-3' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movies.PosterURL} style={{ height: "70%" }} />
        <Card.Body>
          <Card.Title>{movies.Title}</Card.Title>
          <Card.Text>
          <ReactStars
            count={5}
            isHalf={true}
            edit={false}
            value={movies.Rating}
            size={24}
            activeColor="#ffd700"
          />

          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <div className='overlay d-flex align-items-center justify-content-center'>
        </div>
      </Card>
    )
}

export default MovieCard
