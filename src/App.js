import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data.json";
import { Row, Form } from "react-bootstrap";
import SelectedBeast from "./components/SelectedBeast";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: "",
      imageUrl: "",
      description: "",
      beastData: data,
    };
  }

  handleOpen = (title, imgSrc, description) => {
    this.setState({
      showModal: true,
      title: title,
      imageUrl: imgSrc,
      description: description,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  dataFilter = (e) => {
    e.target.value === "1" ? 

    this.setState({
      beastData: this.state.beastData.sort((a,b) => {
        return a.horns-b.horns;
      }),
    }) :
    this.setState({
      beastData: data,
    })
    console.log("f");
  }

  render() {
    return (
      <>
        <Header />

        <Form.Select aria-label="Default select example" onChange={(e) => this.dataFilter(e)}>
          <option>Select Filter</option>
          <option value="1">Filter by number of hornes </option>
          <option value="3">Filter by number of hornes </option>
        </Form.Select>

        <Row>
          {this.state.beastData.map((item) => {
            return (
              <Main
                title={item.title}
                imageUrl={item.image_url}
                description={item.description}
                horns={item.horns} 
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
