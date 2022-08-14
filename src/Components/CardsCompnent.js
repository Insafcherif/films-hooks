import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



function CardsCompnent({ movie, setFilms, films, setMovie }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [titleupdate, setTitleupdate] = useState('');
  const [descupdate, setDescupdate] = useState('');
  const [posterupdate, setPosterupdate] = useState('');
  const [rateupdate, setRateupdate] = useState('');
  
  const handletitleupdate = (e) => {
    setTitleupdate(e.target.value)
  };
  const handleposterupdate = (e) => {
    setPosterupdate(e.target.value)
  };
  const handledescupdate = (e) => {
    setDescupdate( e.target.value)
  }; const handlerateupdate = (e) => {
    setRateupdate( e.target.value )
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(setMovie);
    setFilms(films.map((elt) => {
      if (elt.id === movie.id) {
        return { ...movie, title: titleupdate, decription: descupdate, poster: posterupdate, rate: rateupdate  } }
        else {
        return elt
      }
    }))
    handleClose()
  };
  const DeleteMovie = () => {
    setFilms(films.filter((elt) => elt.id !== movie.id));
  };

  return (
    <Card style={{ width: '18rem', marginBottom: "20px" }}>
      <Card.Img variant="top" src={movie.poster} alt={`${movie.title}`}
        style={{
          width: "250px",
          paddingLeft: "50px",
          paddingTop: "10px",
          marginTop: "10px",
          height: '300px'
        }}
        name="Poster" />
      <Card.Body>
        <Card.Title name="title">{movie.title}</Card.Title>
        <Card.Text style={{ width: ' 250px', height: '170px' }} name="decription"> {movie.decription} </Card.Text>
        <Button variant="primary" onClick={handleShow}> Update</Button>
        <Button variant="danger" onClick={DeleteMovie} >Delete</Button>
        <div style={{ marginLeft: "60Px" }}><ReactStars
          count={5}
          size={24}
          activeColor="#ffd700"
          value={movie.rate}
          edit={false}
        /></div>
        <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>Update Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <Form style={{ width: '400px', margin: 'auto' }} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Update the title</Form.Label>
                <input className="form-control"
                  type="text"
                  name="title"
                  placeholder="Update the title"
                  onChange={handletitleupdate}

                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Update the poster</Form.Label>
                <input className="form-control"
                  type="urlt"
                  placeholder="Update your poster"
                  name="poster"
                  onChange={handleposterupdate}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Update the decription</Form.Label>
                <input className="form-control"
                  type="text"
                  placeholder="Update the decription"
                  name="decription"
                  onChange={handledescupdate}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Update the rate</Form.Label>
                <input className="form-control"
                  type="number"
                  placeholder="Update the rate"
                  name="rate"
                  onChange={handlerateupdate}
                />
              </Form.Group>
              <Button variant="outline-success" type="submit" onClick={handleClose} >
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="outline-primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>

    </Card>
  )
}

export default CardsCompnent