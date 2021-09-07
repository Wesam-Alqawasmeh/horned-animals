import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data.json";
import { Row } from "react-bootstrap";
import SelectedBeast from "./components/SelectedBeast";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title : "",
      imageUrl : "",
      description : "",

    };
  }

  handleOpen = (title,imgSrc,description) => {
    this.setState({
      showModal: true,
      title : title,
      imageUrl : imgSrc,
      description : description,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    return (
      <>
        <Header />

        <Row>
          {data.map((item) => {
            return (
              <Main
                title={item.title}
                imageUrl={item.image_url}
                description={item.description}
                handleOpen={this.handleOpen}
              />
            );
          })}
        </Row>

        
              <SelectedBeast
                title={this.state.title}
                imageUrl={this.state.imageUrl}
                description={this.state.description}
                handleClose={this.handleClose}
                showModal={this.state.showModal}
              />
          
        <Footer />
      </>
    );
  }
}

export default App;
