import './TopRatedFilms.css';
import React from 'react';
import {Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import topRated from './Dummy(topRatedFilms).json';


function TopRatedFilms() {
    const renderCard = (card, index) => {
    return (
           
            <Card style={{ width: '18rem'}} className="box2">
                    <Card.Img variant="top"  style={{height: '12rem' }} src={card.image} />
                    <Card.Body className="color"  style={{height: '11rem'}}>
                        <Card.Title className="text-color">{card.title}</Card.Title>
                        <Card.Text className="text-color">{card.year}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
            </Card>
//             <div class="container-75 px-5 py-5">
//                 <div class="row align-items-center">
//                 <div class="col-lg-2 col-md-12">
//                 <div class="card w-100">
//                     <img
//                     src={card.image}
//                     class="card-img-top"
//                     alt="..."
//                     />
//                     <div class="card-body">
//                     <h5 class="card-title">{card.title}</h5>
                    
//                     <a href="#!" class="btn btn-primary">Button</a>
//                     </div>
//                 </div>
//                 </div>
//                 </div>

// </div>
           
    )}

    return (
        <div className="my-5">
    <h3 className="heading text-color">All Films</h3>
    <p className="heading text-color">Five Top Rated films by the users of Film Ghar </p>

    <div className="grid2 conatainer-fluid justify-content-center mx-5">{topRated.map(renderCard)}</div>
        </div>
    )};
export default  TopRatedFilms;