import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class SelectedBeast extends Component {
  render() {
    return (
      <Modal
        show={this.props.showModal}
        size="lg"
        onHide={this.props.handleClose}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {this.props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.imageUrl} width="600px" height="350px" />
          <p>{this.props.description}</p>
        </Modal.Body>
      </Modal>
    );
  }
}

export default SelectedBeast;
