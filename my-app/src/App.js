import './App.css';
import React, { Component, useState, useEffect} from 'react';
import {Carousel, Button, Card, CardColumns, Row, Col, Container} from 'react-bootstrap';
import {Redirect, Switch, Route, Router, useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Guestbar from './Components/guest';
import AllFilms from './Components/allFilms';
import FilmsReleasedThisWeek from './Components/FilmsReleasedThisWeek';
import profile from './Components/profile';

import TopRatedFilms from './Components/TopRatedFilms';
import SearchView from './Components/Search';
import Wheel from './Components/Spinner';
import SignUp from './Components/SignUp';
import nametag from './Components/nametags';
import login from'./Components/login';

import SpinnerModal from './Components/SpinnerModal';
import IntermediateSpinnerModal from './Components/IntermediateSpinnerModal';
import Form2 from './Components/Form';
import topRated from './Components/Dummy(topRatedFilms).json';
import ViewWatchlist from './Components/viewWatchList';
import ViewFilmDetails from './Components/ViewFilmDetail';

import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

function MyApp() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [modalShow, setModalShow] = React.useState(0);
  const places = ['Movie1', 'Movie2', 'Movie3', 'Movie4', 'Movie5'];

  // function imagesPrint() {
  //   const renderCard = (m, index) => {
  //     return (
    
  //     <Carousel >
  //       <Carousel.Item>
  //         <img
  //           className="d-block w-100 imageFit"
  //           src={m.posterUrl}
  //           alt="First slide"
  //         />
  //         <Carousel.Caption className="text-md-left" >
  //         <h3>Second slide label</h3>
  //           <h6>Genre</h6>
  //           <p>Description</p>
  //           <button type="button" class="btn btn-outline-primary BTN2 lab" onClick={event =>  window.location.href='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjh8sbVjcHvAhXSfMAKHcmpBHAQPAgI'}>Watch Trailer</button>
  //         </Carousel.Caption>
  //       </Carousel.Item>
  //     </Carousel>)
  //   }
  // }

  function profileDeets() {
    const URLcurrent = window.location.href
    let URLcurrentsplit = URLcurrent.split('/')
    console.log("Last", URLcurrentsplit[URLcurrentsplit.length -1])
    let profIndex = URLcurrentsplit[URLcurrentsplit.length -1]
    document.location.href = "/profile/"+profIndex
    //return profIndex
  }

   let filledArray = ``
  topRated.map((key, index)=> {
    // filledArray = new Array(1).fill(`${key.title}`) + filledArray;
    filledArray = filledArray + `${key.title}*`
    console.log(filledArray)
  })
  filledArray.split('*')
  console.log(filledArray.split('*').slice(0, -1));

  
  useEffect(() => {
    if (searchText)
    {fetch(`https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setSearchResults(data.results);
      })
    }
  }, [searchText])


  return (
    <div>
      <Switch>
        <Route path="/login" component={login}>
        </Route>

        <Route path="/SignUp" component={SignUp}>
        </Route>

      <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      
      <Route path="/" exact>
            {/* <div>
                <button onClick={profileDeets} type='button'>
                  Profile
                </button>
            </div> */}
            <div className="container h-75 w-75">

            <Carousel >
              <Carousel.Item>
                <img
                  className="d-block w-100 imageFit"
                  src={img1}
                  alt="First slide"
                />
                <Carousel.Caption className="text-md-left" >
                <h3>Second slide label</h3>
                  <h6>Genre</h6>
                  <p>Description</p>
                  {/* <button type="button" class="btn btn-outline-primary BTN2 lab" onClick={event =>  window.location.href='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjh8sbVjcHvAhXSfMAKHcmpBHAQPAgI'}>Watch Trailer</button> */}
                </Carousel.Caption>
              </Carousel.Item>
              
              <Carousel.Item>
                <img
                  className="d-block w-100 imageFit"
                  src={img2}
                  alt="Second slide"
                />

                <Carousel.Caption className="text-md-left">
                  <h3>Second slide label</h3>
                  <h6>Genre</h6>
                  <p>Description</p>
                  {/* <button type="button" class="btn btn-outline-primary BTN2 lab">Watch Trailer</button> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 imageFit"
                src={img3}
                alt="Third slide"
              />

              <Carousel.Caption className="text-md-left">
              <h3>Second slide label</h3>
                <h6>Genre</h6>
                <p>Description</p>
                {/* <button type="button" class="btn btn-outline-primary BTN2 lab" onClick={event =>  window.location.href='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjh8sbVjcHvAhXSfMAKHcmpBHAQPAgI'}>Watch Trailer</button> */}
              </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    </div>
    <FilmsReleasedThisWeek/>
    <TopRatedFilms/>

    <ViewWatchlist/>
    {/* <Wheel items={places} /> */}

    </Route>
    
    
    <button class="float" onClick={() => setModalShow(1)}>
    {/* <Wheel items={places} /> */}
    </button>
    <SpinnerModal content={<Wheel items={filledArray.split('*').slice(0, -1)}/>}
        show={modalShow}
        onHide={() => setModalShow(0)}
        />
     </div>
    </Switch>
    
      <Switch>  
        <Route path="/searchView" >
          <SearchView keyword={searchText} searchResults={searchResults}/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/allfilms" component={AllFilms}>
        </Route>
      </Switch>
      <Switch>
        <Route path="/movie/:id" component={ViewFilmDetails}>
        </Route>
      </Switch>

      <Switch>
        <Route path="/nametag/:id" component={nametag}>
        </Route>
      </Switch>

      <Switch>
        <Route path="/profile/:id" component={profile}>
        </Route>
      </Switch>  
     
    {/* <Form/> */}
    {/* <Guestbar searchText={searchText} setSearchText={setSearchText}/> */}

    </div>
   

  );
}

export default MyApp;


