import React, { Component } from 'react';
import TopAppBar from './components/TopAppBar';
import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter, Route, Link} from 'react-router-dom';


import './App.css';
import AppDrawer from './components/AppDrawer';
import AtAGlance from './screens/AtAGlanceHome';
import PrescriptionsView from './screens/PrescriptionsView';
import MessagesView from './screens/MessagesView';
import EventLogView from './screens/EventLogView';
import IntegrationsView from './screens/IntegrationsView';
import MusicView from './screens/MusicView';
import ContactInformationView from './screens/ContactInformationView';


class App extends Component<any, any> {
  render() {
    const {classes} = this.props;

    return (
      <BrowserRouter>
        <Container fluid={true} className="App">
            <TopAppBar></TopAppBar>
          <Row>
            <Col xs="4"><AppDrawer /></Col>
            <Col>
              <Route path="/" exact component={AtAGlance}></Route>
              <Route path="/prescriptions" exact component={PrescriptionsView}></Route>
              <Route path="/messages" exact component={MessagesView}></Route>
              <Route path="/events" exact component={EventLogView}></Route>
              <Route path="/integration" exact component={IntegrationsView}></Route>
              <Route path="/music" exact component={MusicView}></Route>
              <Route path="/contact" exact component={ContactInformationView}></Route>

            </Col>
          </Row>
          
        </Container>
      </BrowserRouter>  
    );
  }
}

export default App;
