import './TopRatedFilms.css';
import React from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,Redirect} from 'react-router-dom';
import topRated from './Dummy(topRatedFilms).json';
import ViewFilmDetails from './ViewFilmDetail.js';
<<<<<<< HEAD
import VerticalModal from './VerticalModal.js';
import { FaInfoCircle } from 'react-icons/fa';
import StarIcon from '@material-ui/icons/Star';
import AddCircleIcon from '@material-ui/icons/AddCircle';
=======

>>>>>>> 8c33af158ca0cff38af63a6bcceba333a1ec92c4

function TopRatedFilms() {
    const [modalShow, setModalShow] = React.useState(0);
    const renderCard = (card, index) => {
    return (
<<<<<<< HEAD
  
           
 
            <Card style={{ width: '16rem', position: "relative"}} className="box2">
                           <Link
          to={{
            pathname: `/movie/${card.id}`,
            state: { referrer: card }
          }}
        >
                     <Card.Img variant="top"  style={{height: '18rem' }} src={card.posterUrl} />
                    
                    </Link>
                    < Card.Body className="color"  style={{height: '12rem' , position: "relative"}}>
                     <Card.Text><StarIcon  style={{color: '#D4AF37' }}/>  {card.rating} <FaInfoCircle color="white"  style={{float: "right" }}
                     onClick={() => setModalShow(card.id)}/>
                     </Card.Text>

                       
                        <Row>
                            <Col>
                                 <Card.Title className="text-color" style = {{position: "absolute"}}>{card.title}</Card.Title>
                            </Col>
                            
                                
                       
                        </Row>

                        <Button  className = "addedbutton" >ADD TO WATCHLIST</Button>
                        <VerticalModal content={card}
                          show={modalShow===card.id}
                          onHide={() => setModalShow(0)}
                          />
                    </Card.Body>
                  { /* <AddCircleIcon fontSize= "large" style={{position:"absolute" ,marginLeft: "190px",color: "#D4AF37"}}  />*/}
            </Card>
           
=======
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
>>>>>>> 8c33af158ca0cff38af63a6bcceba333a1ec92c4
           
    )}

    return (
        <div className="my-5">
    <h3 className="heading text-color">Top Rated Films</h3>
    <p className="heading text-color">Five Top Rated films by the users of Film Ghar </p>

    <div className="grid2 conatainer-fluid justify-content-center mx-5">{topRated.map(renderCard)}</div>
        </div>
    )};
export default  TopRatedFilms;