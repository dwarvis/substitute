import React, { useState } from "react";
import "./RequestCard.css";

// component imports
import { Fieldset, Button } from "@geist-ui/react";

import { auth, database, firestore } from "../../fire";

function RequestCard(props) {
  const [myName, setMyName] = useState("");

  if (auth.currentUser != null) {
    var userId = auth.currentUser.uid;

    database
      .ref("/users/" + userId)
      .once("value")
      .then((snapshot) => {
        var data = snapshot.val();
        setMyName(data.name);
      });
  }

  const acceptHandler = (e) => {
    if (myName === "") {
      return;
    }
    firestore.collection(" substituteRequest").doc(props.id).set(
      {
        acceptedBy: myName,
      },
      { merge: true }
    );
  };
  const unacceptHandler = (e) => {
    firestore.collection(" substituteRequest").doc(props.id).set(
      {
        acceptedBy: "none",
      },
      { merge: true }
    );
  };

  return (
    <Fieldset className="card">
      <Fieldset.Title>{props.subject}</Fieldset.Title>
      <Fieldset.Subtitle>Name: {props.teacherName}</Fieldset.Subtitle>
      <Fieldset.Subtitle>Date (dd/mm/yyyy): {props.date}</Fieldset.Subtitle>
      <Fieldset.Subtitle>Start time: {props.start}</Fieldset.Subtitle>
      <Fieldset.Subtitle>Duration: {props.duration} minutes</Fieldset.Subtitle>
      <Fieldset.Footer className="cardFooter">
        <div className="footerLine">
          <Fieldset.Footer.Status>
            Substitute: {props.acceptedBy}
          </Fieldset.Footer.Status>
          <Fieldset.Footer.Actions>
            {props.acceptedBy === "none" ? (
              <Button auto type="success" onClick={acceptHandler}>
                Accept
              </Button>
            ) : props.acceptedBy === myName ? (
              <Button auto type="warning" onClick={unacceptHandler} ghost>
                Unaccept
              </Button>
            ) : (
              <Button auto disabled>
                Accepted
              </Button>
            )}
          </Fieldset.Footer.Actions>
        </div>
      </Fieldset.Footer>
    </Fieldset>
  );
}

export default RequestCard;
