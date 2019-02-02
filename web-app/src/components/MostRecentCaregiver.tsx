import React, { Component } from 'react'
import { Card, Image, Container, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import '../styles/MostRecentCaregiver.css'

export default class MostRecentCaregiver extends Component {
  caregiver = {
    img: "https://i.imgur.com/GmMymJz.png",
    name: "Karen"
  }
  render() {

    return (
      <Card body className="recentCaregiver mt-3">
        <Row>
          <Col>
          <Image src={this.caregiver.img} fluid></Image>
          </Col>
          <Col><p><strong>{this.caregiver.name}</strong></p></Col>
        </Row>
      </Card>
    )
  }
}
