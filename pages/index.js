import React from 'react';
import Head from 'next/head';

import { Jumbotron, Container } from 'reactstrap';

import Menu from '../components/Menu';
import Footer from '../components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function Home(props) {
  return (
    <div>
      <Head>
        <title>Home - Teco</title>
      </Head>
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
              background-color: #FFF;
              margim-bottom: 0rem !important;
            }
            .circle {
              width: 140px;
              height: 140px;
              background-color: #0A197D;
              font-size: 52px;
              color: #FFF;
              padding-top: 24px;
            }
            .centralize {
              margin: 0 auto !important;
              float: none !important;
            }
            `
          }
        </style>
        <Container className='text-center'>
          <div>
            <h2 className='display-4'>Serviços</h2>
            <p className='lead pb-4'>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <div className='rounded-circle circle centralize'>
                <FontAwesomeIcon icon='laptop-code' />
              </div>
              <h2 className='mt-4 mb-4'>Serviço um</h2>
              <p>
                Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia
              </p>
            </div>
            <div className='col-md-4'>
              <div className='rounded-circle circle centralize'>
              <FontAwesomeIcon icon='mobile-alt' />
              </div>
              <h2 className='mt-4 mb-4'>Serviço Dois</h2>
              <p>
                Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia
              </p>
            </div>
            <div className='col-md-4'>
              <div className='rounded-circle circle centralize'>
                <FontAwesomeIcon icon='network-wired' />
              </div>
              <h2 className='mt-4 mb-4'>Serviço três</h2>
              <p>
                Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia
              </p>
            </div>
          </div>
        </Container>

      </Jumbotron>
      <Footer />
    </div>
  )
};

export default Home;