import React, { Component } from 'react';
import TopAppBar from './components/TopAppBar';
import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter, Route, Link} from 'react-router-dom';


import './App.css';
import AppDrawer from './components/AppDrawer';


class App extends Component<any, any> {
  render() {
    const {classes} = this.props;

    return (
      <BrowserRouter>
        <Container fluid={true} className="App">
            <TopAppBar></TopAppBar>
          <Row>
           <Col xs="4"><AppDrawer /></Col>
           <Col></Col>
          </Row>
        </Container>
      </BrowserRouter>  
    );
  }
}

export default App;
