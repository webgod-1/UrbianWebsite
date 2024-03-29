/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
import strategy from '../../../assets/images/strategy.jpg'

class Strategy extends React.Component {
  render() {
    return (
      <Container className="border-top spb-10">
        <Row className="strategy">
          <Col className="text-center">
            <h2 className="h2">Adapt your strategic response.</h2>
            <img src={strategy} className="img-fluid mt-5" alt="strategy" />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Strategy
