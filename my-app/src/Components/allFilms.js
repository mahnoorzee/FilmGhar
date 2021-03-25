import './allFilms.css';
import React, { Component } from 'react';
import {Card, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import movieData from './dummy.json';


function allFilms() {
    const renderCard = (card, index) => {
    return (
           
            <Card style={{ width: '18rem' }} className="box">
                    <Card.Img variant="top" src={card.image} />
                    <Card.Body className="color">
                        <Card.Title className="text-color">{card.title}</Card.Title>
                        <Card.Text className="text-color">{card.year}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
            </Card>
           
    )}

    return (
        <div>
    <h1 className="txtAllFilms text-color">All Films</h1>
    <div className="grid container-fluid">{movieData.map(renderCard)}</div>
        </div>
    )};
export default allFilms;