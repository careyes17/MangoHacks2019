import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import MostRecentCaregiver from '../components/MostRecentCaregiver';
import RecentEventsLog from '../components/RecentEventsLog';

class AtAGlance extends Component {
  render() {
    return (
      <Container fluid className="p-0">
        <Row noGutters={true}>
          <Col>
            {/* User History */}
            <MostRecentCaregiver></MostRecentCaregiver>

          </Col>
        </Row>
      </Container>
    )
  }
}

export default AtAGlance;