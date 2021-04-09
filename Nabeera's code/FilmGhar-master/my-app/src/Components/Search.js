import './allFilms.css';
import React, { Component, useState } from 'react';
import {Card, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import movieData from './dummy.json';


function SearchView({keyword,searchResults}) {
    const results = "Results for" + keyword;
    return (
        <div><h1>{results}</h1></div>
    )

};
export default SearchView;