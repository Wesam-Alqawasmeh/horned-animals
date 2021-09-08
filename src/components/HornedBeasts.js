import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import SelectedBeast from "./SelectedBeast";

class HornedBeasts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favState: 0,
    };
  }

  favRaise = () => {
    this.setState({
      favState: this.state.favState + 1,
    });
  };

  render() {
    return (
      <>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={this.props.imageUrl}
              onClick={() => {
                this.props.handleOpen(
                  this.props.title,
                  this.props.imageUrl,
                  this.props.description
                );
              }}
              height = "250px"
            />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                {this.props.description}
                <br />
                &#128153; {this.state.favState} &nbsp;&nbsp;&nbsp; Horns: {this.props.horns}
              </Card.Text>
              <Button variant="primary" onClick={this.favRaise}>
                Vote
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default HornedBeasts;
