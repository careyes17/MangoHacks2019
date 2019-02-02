import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ListGroup} from 'react-bootstrap';

class AppDrawer extends Component {
  items = [
    "Prescriptions",
    "Messages",
    "Event Log",
    "Google Home",
    "Music",
    "Contact Information"
  ]
  render() {
    return (
      <ListGroup variant="flush">
        {this.items.map(option => <ListGroup.Item>{option}</ListGroup.Item>)}
      </ListGroup>
     );
  }
}

export default AppDrawer;