import React, { Component } from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

interface Prescription {
  properName: string,
  friendlyName: string,
  refillDate: string,
  refillRequested?: boolean
}
export default class PrescriptionsView extends Component {
  prescriptions: Prescription[] = [
    {
      properName: 'H2O',
      friendlyName: "Water",
      "refillDate": "2/3/19",
      refillRequested: true
    },
    {
      properName: 'Oxygen',
      friendlyName: "Breathing Juice",
      "refillDate": "2/3/82",
      refillRequested: false
    },
    {
      properName: 'H2O',
      friendlyName: "Water",
      "refillDate": "2/3/19",
      refillRequested: false
    },
    {
      properName: 'H2O2',
      friendlyName: "Hydrogen Peroxide",
      "refillDate": "3/3/19",
      refillRequested: true
    },
  ]

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            {this.prescriptions.map(prescription => {
              return <Col xs="4">
                  <Card body className="my-2 mx-1" style={{}}>
                  <Card.Title>{prescription.friendlyName}</Card.Title>
                  <Card.Subtitle>Refill available on {prescription.refillDate}</Card.Subtitle>
                  <Button variant="primary" disabled={prescription.refillRequested}>Request refill</Button> 
                </Card>
              </Col>
            })}
          </Row>
        </Container>
      </div>
    )
  }
}
