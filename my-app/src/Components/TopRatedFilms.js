import './TopRatedFilms.css';
import React from 'react';
import {Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,Redirect} from 'react-router-dom';
import topRated from './Dummy(topRatedFilms).json';
import ViewFilmDetails from './ViewFilmDetail.js';


function TopRatedFilms() {
    const renderCard = (card, index) => {
    return (
                <Link
          to={{
            pathname: `/movie/${card.id}`,
            state: { referrer: card }
          }}
        >
           
            <Card style={{ width: '18rem'}} className="box2">
                    <Card.Img variant="top"  style={{height: '12rem' }} src={card.posterUrl} />
                    <Card.Body className="color"  style={{height: '11rem'}}>
                        <Card.Title className="text-color">{card.title}</Card.Title>
                        <Card.Text className="text-color">{card.year}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
            </Card>
            </Link>
           
    )}

    return (
        <div className="my-5">
    <h3 className="heading text-color">All Films</h3>
    <p className="heading text-color">Five Top Rated films by the users of Film Ghar </p>

    <div className="grid2 conatainer-fluid justify-content-center mx-5">{topRated.map(renderCard)}</div>
        </div>
    )};
export default  TopRatedFilms;