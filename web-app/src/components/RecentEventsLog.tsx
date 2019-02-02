import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap';

import '../styles/App.css'

interface PatientEvent {
  message: string;
  caregiver: string;
  time: string;
}

export default class RecentEventsLog extends Component {
  pType = 'py-0'

  events: PatientEvent[] = [
    {message: "Patient ate dinner", caregiver: "Tom", time: "2 hours ago"},
    {message: "Patient took a nap", caregiver: "Alex", time: "2 days ago"},
    {message: "Patient stole someone's wallet", caregiver: "Allen", time: "30 seconds ago"}
  ]
  render() {
    return <ListGroup variant="flush" className="noPadding">
        {this.events.map(event => <ListGroup.Item>
          <p className={this.pType}>{event.message}</p>
          <sub>Caregiver: {event.caregiver}</sub>
          <p className={this.pType}><small>{event.time}</small></p>
        </ListGroup.Item>)}
    </ListGroup>
  }
}
