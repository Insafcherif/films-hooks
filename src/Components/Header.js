import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactStars from "react-rating-stars-component";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Header({ setFilms, setCaracter, setRate, addnewfilm,addNewMovie }) {
  const ratingChanged = (newRating) => {
    setRate(newRating);
  };
  const handelChange = (event) => {
    setCaracter(event.target.value);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [movie, setMovie] = useState({
      id: '20',
      title: '',
      poster: '',
      decription: '',
      rate: '0'
  });

  const handleChange = (e) => {
      setMovie({ ...movie, id: Math.floor(Math.random() * 10000), [e.target.name]: e.target.value })
  };
  const handleSubmit = (event) => {
      event.preventDefault();
      addNewMovie(movie);
      setMovie({
          ...movie, title: '',
          poster: '',
          decription: '',
          rate: '0'
      })
  };
  return (
    <Navbar bg="light" expand="lg" fixed="top" style={{ boxShadow: '1px 2px 9px gray' }} >
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: 'red' }}>Best Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
              edit={true}
            />
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handelChange}
            />
          </Form>
          <Button variant="outline-success" style={{
                fontSize: "15px",
                width: "150px",}} 
                onClick={handleShow}>
                Add Movie
            </Button>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Add Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form style={{ width: '400px', margin: 'auto' }} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Add the title</Form.Label>
                            <input className="form-control"
                                type="text"
                                name="title"
                                placeholder="Add the title"
                                onChange={handleChange}
                                value={movie.title} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Add the poster</Form.Label>
                            <input className="form-control"
                                type="urlt"
                                placeholder="add your poster"
                                name="poster"
                                onChange={handleChange}
                                value={movie.poster} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Add the decription</Form.Label>
                            <input className="form-control"
                                type="text"
                                placeholder="Add the decription"
                                name="decription"
                                onChange={handleChange}
                                value={movie.decription} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Add the rate</Form.Label>
                            <input className="form-control"
                                type="number"
                                placeholder="add the rate"
                                name="rate"
                                onChange={handleChange}
                                value={movie.rate} />
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header