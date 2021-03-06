import './nametag.css';
import React from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,Redirect} from 'react-router-dom';
import allMovies from './dummy.json';
import actorDetails from './Person.json';


import VerticalModal from './VerticalModal.js';
import { FaInfoCircle } from 'react-icons/fa';
import StarIcon from '@material-ui/icons/Star';
import AddCircleIcon from '@material-ui/icons/AddCircle';


function NameTags(props) {

    const identity =  props.location.state.referrer
    const [modalShow, setModalShow] = React.useState(0);
    const [actorData, setActordata] = React.useState([])
    const [movieList, setMovieList] = React.useState([])
    const moviesList = []


    const filterMovies = (id) => {
        
        const movies = moviesByThem(id)[id-1]
        console.log("Movies: ", movies)         
        const moviesList = []
        let l = []

        movies.map(eachM => {
            console.log("Filterrrrr: ", (allMovies.filter(movie => movie.title === eachM)))
            l.push(allMovies.filter(movie => movie.title === eachM))
            allMovies.filter(movie => movie.title === eachM).map(fil => {
                moviesList.concat(fil)
            })
        })
        return l

        // (moviesByThem(id)[id-1]).map(eachM => {allMovies.filter(movie => movie.title === eachM)})

    }
    
    
    const nameActor = (id) => actorDetails.map(actor => {
        if (id === actor.id) {
        return (actor.name)
        }
    })

    const imageActor = (id) => actorDetails.map(actor => {
        if (id === actor.id) {
            return (actor.image)
        }
    })

    const typeActor = (id) => actorDetails.map(actor => {
        if (id === actor.id) {
            return (actor.type)
        }
    })

    const desActor = (id) => actorDetails.map(actor => {
        if (id === actor.id) {
            return (actor.description)
        }
    })

    const moviesByThem = (id) => actorDetails.map(actor => {
        if (id === actor.id) {
            console.log("moviesByThem", actor.movies)
            return (actor.movies)
        }
    })

    const nameTagBox = (card, index) => {
        return(
            <div class="nametagBox"></div>    
        )
    }

    const renderCard = (card, index) => {
    return (
            <Card style={{ width: '16rem', position: "relative"}} className="box22">
                <Link to={{pathname: `/movie/${card.id}`, state: { referrer: card }}}>
                    <Card.Img variant="top"  style={{height: '18rem' }} src={card.posterUrl} />
                </Link>
                < Card.Body className="color"  style={{height: '12rem' , position: "relative"}}>
                    <Card.Text><StarIcon  style={{color: '#D4AF37' }}/>  {card.rating} <FaInfoCircle color="white"  style={{float: "right" }} onClick={() => setModalShow(card.id)}/>
                    </Card.Text>
                       
                    <Row>
                        <Col>
                            <Card.Title className="text-color" style = {{position: "absolute"}}>{card.title}</Card.Title>
                        </Col>
                    </Row>

                    <Button  className = "addedbuttonWatch" >ADD TO WATCHLIST</Button>
                    <VerticalModal content={card} show={modalShow===card.id} onHide={() => setModalShow(0)}/>
                </Card.Body>
                  { /* <AddCircleIcon fontSize= "large" style={{position:"absolute" ,marginLeft: "190px",color: "#D4AF37"}}  />*/}
            </Card>           
    )}

    return (
        <div>
            <div className="nametagBox">
    
                <div className="nameActor">
                    {nameActor(identity)}
                </div>

                <div className="typeActor">
                    {typeActor(identity)}
                </div>

                <table>
                    <tbody>
                        <tr>
                            <td><img className = "imageSize" src = {imageActor(identity)}/></td>
                            <td className="desText">{desActor(identity)}</td>
                        </tr>
                    </tbody>   
                </table>

            </div>            
            
            {/* <div className="my-5">
                <div className="grid2 conatainer-fluid justify-content-center mx-5">{allMovies.map(renderCard)}</div>
            </div> */}

            <div>
                {console.log("filterMovies: ", filterMovies(identity))}
            </div>

            <div className="grid2 conatainer-fluid justify-content-center mx-5">
                {(filterMovies(identity).map(list => list.map(renderCard)))}
            </div>
            
        </div>
    )};

    

export default  NameTags;