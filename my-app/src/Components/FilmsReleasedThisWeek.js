import './TopRatedFilms.css';
import React from 'react';

import {Card, Button, Row, Col, Modal} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,Redirect} from 'react-router-dom';
import topRated from './Dummy(topRatedFilms).json';

import { FaInfoCircle } from 'react-icons/fa';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import VerticalModal from './VerticalModal';
import StarIcon from '@material-ui/icons/Star';


function FilmsReleasedThisWeek() {
    const [modalShow, setModalShow] = React.useState(0);
     Date.prototype.getWeekOfMonth = function(exact) {
        var month = this.getMonth()
            , year = this.getFullYear()
            , firstWeekday = new Date(year, month, 1).getDay()
            , lastDateOfMonth = new Date(year, month + 1, 0).getDate()
            , offsetDate = this.getDate() + firstWeekday - 1
            , index = 1 // start index at 0 or 1, your choice
            , weeksInMonth = index + Math.ceil((lastDateOfMonth + firstWeekday - 7) / 7)
            , week = index + Math.floor(offsetDate / 7)
        ;
        if (exact || week < 2 + index) return week;
        return week === weeksInMonth ? index + 5 : week;
    };
    const datefunction = (date) => {
      const today = new Date();

      //const datetoday = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const datetoday =  new Date( today.getFullYear(),today.getMonth()+1, today.getDate())
      const datesplit = date.split("-")
      const moviedate = new Date(datesplit[2],datesplit[1]-1, datesplit[0])
       //console.log(moviedate.getWeekOfMonth(), datetoday.getWeekOfMonth() )
      if (moviedate.getWeekOfMonth() == datetoday.getWeekOfMonth()){
           //console.log(datesplit[1], today.getMonth()+1)
          return(true)
        }
        else 
          return(false)
        }
      

    
    const renderCard = (card, index) => {
    return (

        <Card style={{ width: '16rem', position: "relative"}} className="box2 rounded">
        <Link
            to={{
            pathname: `/movie/${card.id}`,
            state: { referrer: card }
            }}
            >
  <Card.Img variant="top"  style={{height: '18rem' }} src={card.posterUrl} />
 
 </Link>
 < Card.Body className="color "  style={{height: '12rem' , position: "relative"}}>
  <Card.Text><StarIcon  style={{color: '#D4AF37' }}/>  {card.rating} <FaInfoCircle color="white"  style={{float: "right" }}
  onClick={() => setModalShow(card.id)}/>
  </Card.Text>

    
     <Row>
         <Col>
              <Card.Title className="text-color" style = {{position: "absolute"}}>{card.title}</Card.Title>
         </Col>
         
             
    
     </Row>

     <Button  className = "addedbutton p-2 ml-2" >ADD TO WATCHLIST</Button>
     <VerticalModal content={card}
       show={modalShow===card.id}
       onHide={() => setModalShow(0)}
       />
 </Card.Body>
{ /* <AddCircleIcon fontSize= "large" style={{position:"absolute" ,marginLeft: "190px",color: "#D4AF37"}}  />*/}
</Card>



    )}

    return (
        <div className="my-5">
        <div className = "section-heading">
    <h3 >Films Released In This Week</h3>
    </div>

    <div className="grid2 conatainer-fluid justify-content-center mx-5">
    {topRated.filter( movie=> datefunction(movie.datereleased) === true ).map(renderCard)}
    </div>
        </div>
    )};
export default FilmsReleasedThisWeek; 