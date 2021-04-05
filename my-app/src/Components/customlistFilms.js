import './allFilms.css';
import './TopRatedFilms.css';
import React, { Component} from 'react';
import {Card, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import movieData from './Dummy(topRatedFilms).json';
import {Link,Redirect} from 'react-router-dom';

function customlistFilms(props) {
    const customlistrecvd = props.location.state.referrer
    const renderCard = (card, index) => {
    return (
           <Link
          to={{
            pathname: `/movie/${card.id}`,
            state: { referrer: card }
          }}
        >
            <Card style={{ width: '18rem' }} className="box">
                    <Card.Img variant="top" src={card.posterUrl} />
                    <Card.Body className="color" style={{height: '11rem' , position: "relative"}}>
                        <Card.Title className="text-color">{card.title}</Card.Title>
                        <Card.Text className="text-color">{card.year}</Card.Text>
                        <Button className = "addedbutton"> ADD TO WATCHLIST </Button>
                   
                    </Card.Body>
            </Card>
           </Link>
    )}

    return (
        <div>
    <h1 className="txtAllFilms text-color">All Films</h1>

    <div className="grid container-fluid">{ movieData.filter(movie => customlistrecvd.movie_id.includes(movie.id)).map(renderCard)}</div>
        </div>
    )};
export default customlistFilms;