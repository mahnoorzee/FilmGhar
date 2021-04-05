import './App.css';
import React, { Component, useState} from 'react';
import {Carousel, Button, Card, CardColumns, Row, Col, Container} from 'react-bootstrap';
import {Redirect, Switch, Route, Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import allFilms from './Components/allFilms';
import customlistFilms from './Components/customlistFilms';
import TopRatedFilms from './Components/TopRatedFilms';
import SearchView from './Components/Search';
import SignUp from './Components/SignUp';
import ViewFilmDetails from './Components/ViewFilmDetail';
import ViewCustomlist from './Components/viewCustomList';
import ViewWatchlist from './Components/viewWatchList';

// import cardCarousel from './Components/cardCarousel';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';


function MyApp() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  


  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Switch>
      <Route path="/" exact>
            <div className="container h-75 w-75">
            <Carousel >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img1}
                  alt="First slide"
                />
                <Carousel.Caption className="text-md-left" >
                <h3>Second slide label</h3>
                  <h6>Genre</h6>
                  <p>Description</p>
                  <button type="button" class="btn btn-outline-primary BTN2 lab">Watch Trailer</button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img2}
                  alt="Second slide"
                />

                <Carousel.Caption className="text-md-left">
                  <h3>Second slide label</h3>
                  <h6>Genre</h6>
                  <p>Description</p>
                  <button type="button" class="btn btn-outline-primary BTN2 lab">Watch Trailer</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
              />

              <Carousel.Caption className="text-md-left">
              <h3>Second slide label</h3>
                <h6>Genre</h6>
                <p>Description</p>
                <button type="button" class="btn btn-outline-primary BTN2 lab" onClick={event =>  window.location.href='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjh8sbVjcHvAhXSfMAKHcmpBHAQPAgI'}>Watch Trailer</button>
              </Carousel.Caption>
            </Carousel.Item>
      </Carousel>
    </div>
    <TopRatedFilms/>
     <ViewWatchlist/>
    <ViewCustomlist/>

    </Route>
    </Switch>

      <Switch>  
        <Route path="/searchView" >
          <SearchView keyword={searchText} searchResults={searchResults}/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/allfilms" component={allFilms}>
        </Route>
      </Switch>
      <Switch>
        <Route path="/SignUp" component={SignUp}>
        </Route>
      </Switch>
            <Switch>
        <Route path="/movie/:id" component={ViewFilmDetails}>
        </Route>
      </Switch>
      <Switch>
        <Route path="/customlist/:id" component={customlistFilms}>
        </Route>
      </Switch>

    </div>

  );
}

export default MyApp;


