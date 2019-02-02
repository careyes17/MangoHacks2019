import React, { Component } from 'react';
import TopAppBar from './components/TopAppBar';
import {Container, Row, Col} from 'react-bootstrap';


import './App.css';
import AppDrawer from './components/AppDrawer';


class App extends Component<any, any> {
  render() {
    const {classes} = this.props;

    return (
        <Container fluid={true} className="App">
            <TopAppBar></TopAppBar>
          <Row>
           <AppDrawer></AppDrawer>
          </Row>
        </Container>
    );
  }
}

export default App;
