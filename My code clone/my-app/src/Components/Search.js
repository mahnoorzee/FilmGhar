import './allFilms.css';
import React, { Component, useState } from 'react';
import {Card, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import movieData from './dummy.json';
import App from '../App.js'


function SearchView({keyword,searchResults}) {
    // const [results, setResults] = React.useState(``)
    let results = "Showing results for " + keyword;
    // if (keyword !== searchResults)
    // {
    //     return ( <div>No Results found</div>)
    // }
    if (keyword == '')
    {
        return (
            ''
        // <App/>
        // <div>
        // <div>No Results found</div>
        // </div>
        )
       
    }
    // const resultResponse = searchResults.map((obj, i) => {
    //     return <div>{obj.title}</div>
    // })
    // return (

    //     <div>
    //     <h1>{results}</h1>
    //     {resultResponse}
    //     </div>

    // )
    const renderCard = (card, index) => {
        return (
               
                <Card style={{ width: '18rem' }} className="box">
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7n2hpzE1hNzc4V7nHj_GT2CWSqtjCld0PhQ&usqp=CAU" />
                        <Card.Body className="color">
                            <Card.Title className="text-color">{card.title}</Card.Title>
                            <Card.Text className="text-color">{card.year}</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                </Card>
               
        )}


    return (
        <div>
    {/* <h3 className="txtAllFilms text-color">{results}</h3> */}
    <div className="grid container-fluid">{searchResults.length === 0 ? (<h3 className=" p-4 text-color">No results found</h3>) : searchResults.map(renderCard)}</div>
        </div>
    )

};
export default SearchView;