import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const MovieApp = ({handleAdd}) => {
    const [show, setShow] = useState(false);
    const [Title, setTitle] = useState("")
    const [ Description, setDescription] = useState("")
    const [url, setUrl] = useState("")
    const [rate, setRate] = useState(0)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log("fghjjk")
      const newMovie = {
          id:Math.random(),
          Title,
          Description,
          PosterURL:url,
          Rating:rate
      }
      if(Title && Description && rate && url){
        handleAdd(newMovie)
        setTitle("")
        setUrl("")
        setRate()
        setDescription("")
        handleClose()
       }
       else alert("Missing fields")
      }
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
         Add Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Movie</Modal.Title>
          </Modal.Header>
          <form onSubmit={handleSubmit}>
          <Modal.Body>
              
              Title :{" "}
            <input
              type="text"
              className="form-control"
              placeholder="Enter movie name"
              onChange={e => setTitle(e.target.value)}
              value={Title}
            />
            Description:
            <input
              type="text"
              className="form-control"
              placeholder="Enter description movie"
              onChange={e => setDescription(e.target.value)}
              value={Description}

            />
            Image:
            <input
              type="url"
              className="form-control"
              placeholder="Enter movie poster"
              onChange={e => setUrl(e.target.value)}
              value={url}
             
            />
            Rate:
            <input
              type="number"
              className="form-control"
              placeholder="Enter movie rate"
              onChange={e => setRate(e.target.value)}
              value={rate}
             
            />
             
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
          </form>
          
        </Modal>
      </>
    )
}

export default MovieApp
