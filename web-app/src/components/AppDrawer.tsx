import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {ListGroup} from 'react-bootstrap';

interface ListItem {
  name: string,
  route: string,
}

class AppDrawer extends Component {
  items: ListItem[] = [
    {name: "Prescriptions", route: '/prescriptions'},
    {name: "Messages", route: '/messages'},
    {name: "Event Log", route: '/events'},
    {name: "Google Home", route: '/integration'},
    {name: "Music", route: '/music'},
    {name: "Contact Information", route: '/contact'}
  ]
  render() {
    return (
      <ListGroup variant="flush">
        {this.items.map(option => 
        <ListGroup.Item>
          <Link to={option.route}>{option.name}</Link>
        </ListGroup.Item>)}
      </ListGroup>
     );
  }
}

export default AppDrawer;