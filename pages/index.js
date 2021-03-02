import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

import Menu from '../components/Menu';

function Home(props) {
  return (
    <div>
      <Menu />
      <Jumbotron fluid className='descr-top'>
        <style>
          {
            `.descr-top{
              background-color: #050c3d;
              color: #00a1fc;
              margin-bottom: 0rem !important;
            }`
          }
        </style>
        <Container className='text-center'>
          <h1 className="display-4">Temos a solução que a sua empresa precisa!</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          
          <p className="lead">
            <a href='/budget' className='btn btn-outline-primary btn-lg mt-4'>Orçamento</a>
          </p>
        </Container>
      </Jumbotron>

      <Jumbotron fluid className='services'>
        <style>
          {
            `.services {
              background-color: #fff;
              margim-bottom: 0rem !important;
            }`
          }
        </style>
        <Container className='text-center'>
          <div>
            <h2 className='display-4'>Serviços</h2>
            <p className='lead pb-4'>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
          </div>
          <div className='row'>
            
          </div>
        </Container>

      </Jumbotron>
    </div>
  )
};

export default Home;