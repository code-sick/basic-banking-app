import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TransitionModal from "./Modals/transitionModal";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import SuccessModal from "./Modals/success";
import FailureModal from "./Modals/failure";

function CustomerCars({ result, myAccountBalance, setMyAccountBalance }) {
  const { id, first_name, last_name, phone_number, email } = result;
  const [transitionModal, setTransitionModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [failureModal, setFailureModal] = useState(false);

  return (
    <Card className="card">
      <Card.Header as="h5">Customers Detail</Card.Header>
      <Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>ID: {id}</ListGroupItem>
          <ListGroupItem>First Name: {first_name}</ListGroupItem>
          <ListGroupItem>Last Name: {last_name}</ListGroupItem>
          <ListGroupItem>Phone Number: {phone_number}</ListGroupItem>
          <ListGroupItem>Email ID: {email}</ListGroupItem>

          <ListGroupItem>
            <Button variant="primary" onClick={() => setTransitionModal(true)}>
              Transfer Money
            </Button>
            <TransitionModal
              myAccountBalance={myAccountBalance}
              setMyAccountBalance={setMyAccountBalance}
              result={result}
              setTransitionModal={setTransitionModal}
              show={transitionModal}
              onHide={() => setTransitionModal(false)}
              setSuccessModal={setSuccessModal}
              setFailureModal={setFailureModal}
            />
            <SuccessModal
              show={successModal}
              onHide={() => setSuccessModal(false)}
            />
            <FailureModal
              show={failureModal}
              onHide={() => setFailureModal(false)}
            />
          </ListGroupItem>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default CustomerCars;
