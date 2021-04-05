import './TopRatedFilms.css';
import React from 'react';
import {Carousel, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,Redirect} from 'react-router-dom';
import watchlists from './Watchlists';
import films from './Dummy(topRatedFilms).json';

function ViewWatchlist() {

    const renderCard = (card, index) => {
      console.log(films.filter(wl => wl.id === card))
    return (
                <Link
          to={{
            pathname: `/movie/${card}`,
            state: { referrer: films.filter(wl => wl.id === card)[0] }
          }}
        >
           
            <Card style={{ width: '18rem'}} className="box2">
                    <Card.Img variant="top"  style={{height: '12rem' }} src={films.filter(wl => wl.id === card)[0].posterUrl} />
                    <Card.Body className="color"  style={{height: '11rem' , position: "relative"}}>
                        <Card.Title className="text-color" style={{ position: "relative"}}>{films.filter(wl => wl.id === card)[0].title}</Card.Title>
                        <Card.Text className="text-color"  style={{ position: "absolute"}}>{films.filter(wl => wl.id === card)[0].year}</Card.Text>
                       <Button className = "addedbutton"> ADDED TO WATCHLIST </Button>
                    </Card.Body>
            </Card>
            </Link>

  

           
           
    )}

    return (
        <div >
    <h3 className="heading text-color">Watch List</h3>
    <p className="heading text-color"> Films in your Watchlist </p>
     <div className="grid2 conatainer-fluid justify-content-center mx-5">{watchlists.filter(wl => wl.user_id === 1).map(user => (user.movie_id.map(renderCard))) }</div>
   
   

</div>
    )};
export default  ViewWatchlist;

