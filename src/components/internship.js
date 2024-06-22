import React from 'react'
import Card from 'react-bootstrap/Card';
import react from './Images/react.png';
import DataAnalyst from './Images/DataAnalyst.png';
import BigDataEngineer from './Images/BigDataEngineer.png';
import DataScientist from './Images/DataScientist.png';
import Java from './Images/Java.png';
import MERN from './Images/MERN.png';
import { Container } from 'react-bootstrap';
const internship = () => {
  return (
    <div>
      <Container>
      <h1>Interships offered by Almnd</h1>
      </Container>
      
      <>
      <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={Java} alt=""/>
      <div class="card-body">
        <h5 class="card-title">Java Developer</h5>
        <p class="card-text"> Responsible for the design, development, and management of Java-based applications</p>
        <a href="#" class="btn btn-primary">Apply</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={MERN} alt=""/>
      <div class="card-body">
        <h5 class="card-title">MERN Stack Developer</h5>
        <p class="card-text">Develop, test, and maintain web applications using the MEAN stack.</p>
        <a href="#" class="btn btn-primary">Apply</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={react} alt=""/>
      <div class="card-body">
        <h5 class="card-title">React Frontend Developer</h5>
        <p class="card-text">Responsible for the design and implementation of user interfaces (UIs) and UI components using React, a front-end JavaScript library.</p>
        <a href="#" class="btn btn-primary">Apply</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={DataAnalyst} alt=""/>
      <div class="card-body">
        <h5 class="card-title">Data Analyst</h5>
        <p class="card-text">Reviews data to identify key insights into a business's customers and ways the data can be used to solve problems.</p>
        <a href="#" class="btn btn-primary">Apply</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={BigDataEngineer} alt=""/>
      <div class="card-body">
        <h5 class="card-title">Big Data Engineer</h5>
        <p class="card-text">Gather, prepare and ingest their organizations' data into big data infrastructures.</p>
        <a href="#" class="btn btn-primary">Apply</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={DataScientist} alt=""/>
      <div class="card-body">
        <h5 class="card-title">Data Scientist</h5>
        <p class="card-text">data scientist collects, analyzes, and interprets vast amounts of data using analytical, statistical, and programming skills.</p>
        <a href="#" class="btn btn-primary">Apply</a>
      </div>
    </div>
  </div>
</div>
</>
</div>
  )
}

export default internship;
