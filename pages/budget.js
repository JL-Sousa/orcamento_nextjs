import React from 'react';
import Head from 'next/head';

import Menu from '../components/Menu';
import Footer from '../components/Footer';

import { Button,
         Form,
         FormGroup,
         Label, 
         Input,
         Container, 
         Jumbotron 
        } from 'reactstrap';

function Budget() {
  return (
    <div>
       <Head>
        <title>Orçamento - Teco</title>
      </Head>
      <Menu />

      <Jumbotron fluid className='descr-top'>
      <style>
          {
            `.descr-top{
              background-color: #050c3d;
              color: #00a1fc;
              padding-top: 40px;
              padding-bottom: 40px;
              margin-bottom: 0rem !important;
            }`
          }
        </style>
        <Container className='text-center'>
          <h1 className='display-4'>Orçamento</h1>
        </Container>
      </Jumbotron>

      <Jumbotron fluid className='form-budget'>
        <style>
          {`.form-budget {
            padding-top: 80px;
            padding-bottom: 80px;
            background-color: #FFF;
            margin-bottom: 0rem !important;
          }`}
        </style>
        <Container>
          <Form>
            <FormGroup>
              <Label for="name">Nome</Label>
              <Input type="text" name="name" id="name" placeholder="Nome Completo" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Digite seu melhor email" />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Telefone</Label>
              <Input type="text" name="whatsApp" id="whatsApp" placeholder="(xx) xxxx-xxxx" />
            </FormGroup>
            <FormGroup>
              <Label for="whatsApp">WhatsApp</Label>
              <Input type="text" name="name" id="name" placeholder="Nome Completo" />
            </FormGroup>
            <FormGroup>
              <Label for="project">Nome</Label>
              <Input type="textarea" name="project" id="project" placeholder="Fale um pouco do seu projeto" />
            </FormGroup>

            <Button type='submit'outline color='primary'>Solicitar</Button>
          </Form>
        </Container>
      </Jumbotron>

      <Footer />
    </div>
  )
};

export default Budget;