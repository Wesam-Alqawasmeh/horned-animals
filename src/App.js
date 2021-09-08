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
    if (e.target.value === "1") {
      this.setState({
        beastData: data.filter(item => {
          return item.horns === 1;
        })
      })
    }else
    if (e.target.value === "2") {
      this.setState({
        beastData: data.filter(item => {
          return item.horns === 2;
        })
      })
    }else
    if (e.target.value === "3") {
      this.setState({
        beastData: data.filter(item => {
          return item.horns === 3;
        })
      })
    }else
    if (e.target.value === "4") {
      this.setState({
        beastData: data.filter(item => {
          return item.horns === 100;
        })
      })
    }else
    if (e.target.value === "0") {
      this.setState({
        beastData: data,
      })
    }

  }

  render() {
    return (
      <>
        <Header />

        <Form.Select aria-label="Default select example" onChange={(e) => this.dataFilter(e)}style={{margin: "30px 0px"}}>
          <option value="0">Select Filter</option>
          <option value="1">Filter by number of hornes 1 </option>
          <option value="2">Filter by number of hornes 2 </option>
          <option value="3">Filter by number of hornes 3 </option>
          <option value="4">Filter by number of hornes 100 </option>
        </Form.Select>

        <Row style={{width: "100%",margin: "0px"}}>
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
