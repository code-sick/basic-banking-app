import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, ListGroup, ListGroupItem } from "react-bootstrap";

function TransitionModal(props) {
  const [transferAmount, setTransferAmount] = useState(0);

  const { id, first_name, last_name, phone_number, email } = props.result;

  const postTransition = () => {
    fetch("https://basic-banking-api.herokuapp.com/api/transitions", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        first_name: first_name,
        last_name: last_name,
        phone_number: phone_number,
        email: email,
        transfer_balance: transferAmount,
      }),
    });
  };

  const validateInput = (x) => {
    if (isNaN(x)) return false;
    else return true;
  };

  const updateData = () => {
    if (validateInput(transferAmount)) {
      props.setMyAccountBalance(props.myAccountBalance - transferAmount);
      postTransition();

      props.setSuccessModal(true);
    } else {
      props.setFailureModal(true);
    }
    props.setTransitionModal(false);
    setTransferAmount(0);
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Transfer Money To
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>ID: {id}</ListGroupItem>
          <ListGroupItem>First Name: {first_name}</ListGroupItem>
          <ListGroupItem>Last Name: {last_name}</ListGroupItem>
          <ListGroupItem>Phone Number: {phone_number}</ListGroupItem>
          <ListGroupItem>Email ID: {email}</ListGroupItem>
          <ListGroupItem>
            Enter Amount :
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                aria-label="Amount (to the nearest dollar)"
                name="transferAmount"
                onChange={(e) => setTransferAmount(e.target.value)}
              />
              <div class="input-group-append">
                <span class="input-group-text">.00</span>
              </div>
            </div>
          </ListGroupItem>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => updateData(transferAmount)}>Send</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default TransitionModal;
