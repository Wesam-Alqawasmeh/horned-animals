import React, { Component } from "react";
import HornedBeasts from "./HornedBeasts";
import data from "../data.json";
import { Row } from "react-bootstrap";

class Main extends Component {
  render() {
    return (
      <>
        <Row>
          {data.map((item) => {
            return (
              <HornedBeasts
                title={item.title}
                imageUrl={item.image_url}
                description={item.description}
              />
            );
          })}
        </Row>
      </>
    );
  }
}

export default Main;
