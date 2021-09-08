import React, { Component } from "react";
import HornedBeasts from "./HornedBeasts";


class Main extends Component {
  render() {
    return (
      <>
        <HornedBeasts
          title={this.props.title}
          imageUrl={this.props.imageUrl}
          description={this.props.description}
          horns={this.props.horns}
          handleOpen={this.props.handleOpen}
        />
      </>
    );
  }
}

export default Main;
