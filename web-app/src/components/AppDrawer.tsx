import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ListGroup} from 'react-bootstrap';

class AppDrawer extends Component {
  items = [1, 2, 3, 4, 5, 6];
  render() {
    return (
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        {this.items.map(n => <ListGroup.Item>{n}</ListGroup.Item>)}
      </ListGroup>
     );
  }
}

export default AppDrawer;