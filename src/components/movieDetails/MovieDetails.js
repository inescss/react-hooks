import React from 'react'
import { Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./MovieDetail.css";

const MovieDetails = ({Movie, match}) => {
   
    const film = Movie.find(el => el.id.toString() === match.params.id.toString())
    return (
        
        <div className="wrapper">
        <iframe width="560"
        height="315"
        src={film.trailer}
        title="YouTube video player"
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe><br/>
        <h1>{film.Title}</h1>
        <img className="image" src={film.PosterURL} alt=""/>
        <h4>{film.Description}</h4>
        <h2> Acteurs </h2>
        <div className="box">
        <div className="card">
            <div className="imgBx">
            <img src={film.Acteur1} alt="" />
            </div>
            <div className="details">
                <h3> {film.NameActeur1} </h3>
            </div>

        </div>
        <div className="card">
            <div className="imgBx">
            <img src={film.Acteur2} alt="" />
            </div>
            <div className="details">
                <h3> {film.NameActeur2} </h3>
            </div>

        </div>
        <div className="card">
            <div className="imgBx">
            <img src={film.Acteur3} alt="" />
            </div>
            <div className="details">
                <h3> {film.NameActeur3} </h3>
            </div>
            </div>
        </div>
        <Link to={"/"}><Button variant="primary">Go Back</Button></Link>
        </div>

     
    )
}

export default MovieDetails
