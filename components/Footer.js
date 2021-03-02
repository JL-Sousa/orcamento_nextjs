import React from 'react';

import { Container, Jumbotron } from 'reactstrap';

function Footer () {
  return (
    <Jumbotron fluid className='footer'>
      <style>
        {
          `.footer {
            background-color: #050D3D;
            color: #FFF;
            padding-top: 10px;
            padding-bottom: 10px;
            margin-bottom: 0rem !important;
          }
          `
        }
      </style>
      <Container className='text-center'>
        <h1 className='lead'>Rodapé</h1>
      </Container>
     
    </Jumbotron>
  );
};

export default Footer;