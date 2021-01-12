import React from "react";
import "./RequestCard.css";

// component imports
import { Fieldset, Button } from "@geist-ui/react";

function RequestCard(props) {
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
              <Button auto type="success">
                Accept
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
