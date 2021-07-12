import React, { Component } from 'react'
import './Cards.css';
import { Button } from 'reactstrap';
import Card from '../../components/Card';

export default class Cards extends Component {
  render() {
    return (
      <div className="row m-0 p-0">
        <div className="col-md-6 p-0">
          <Card className="bg-primary">
            <h1>Why Framer</h1>
            <p className="my-4">Easily bring designs to life with code, then share them with teammates.</p>
            <Button color="light" className="me-3">See Features</Button>
            <Button color="primary">Get Started</Button>
          </Card>
        </div>
        <div className="col-md-6 p-0">
          <Card >
            <h1>Subscribe Today </h1>
            <p className="my-4">Get 20% off when you choose our yearly subscription plan.</p>
            <Button color="secondary">View pracing</Button>
          </Card>
        </div>
      </div>
    )
  }
}