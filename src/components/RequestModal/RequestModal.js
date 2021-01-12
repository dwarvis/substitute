import React, { useState } from "react";
import { Modal, Input } from "@geist-ui/react";

//component imports
import DateSelect from "./DateSelect";
import SubjectSelect from "./SubjectSelect";

import { firestore } from "../../fire";

function RequestModal(props) {
  //Submit handler
  const submitHandler = (event) => {
    props.closeModal();
    var output = {
      name: name,
      email: email,
      startTime: start,
      duration: duration,
      subject: subject,
      date: year + "/" + month + "/" + day,
      acceptedBy: "none",
    };
    firestore.collection(" substituteRequest").add(output);
  };

  //Name handler
  const [name, setName] = useState();
  const nameHandler = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  //Email handler
  const [email, setEmail] = useState();
  const emailHandler = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  //Start time handler
  const [start, setStart] = useState();
  const startHandler = (e) => {
    setStart(e.target.value);
    console.log(e.target.value);
  };

  //Duration time handler
  const [duration, setDuration] = useState();
  const durationHandler = (e) => {
    setDuration(e.target.value);
    console.log(e.target.value);
  };

  //Subject handler
  const [subject, setSubject] = useState("");
  const subjectHandler = (val) => {
    setSubject(val);
    console.log(val);
  };

  //Date handler
  const [day, setDay] = useState("null");
  const [month, setMonth] = useState("null");
  const [year, setYear] = useState("null");
  const dayHandler = (val) => setDay(val);
  const monthHandler = (val) => setMonth(val);
  const yearHandler = (val) => setYear(val);

  //Select handlers
  const selectHandler = (val) => console.log(val);

  return (
    <Modal open={props.open} onClose={props.onClose}>
      <Modal.Title>Request Details</Modal.Title>
      <Modal.Content>
        <div>
          <p>Your full name: </p>
          <Input
            type="text"
            placeholder="eg. Daniel Dumile"
            onChange={nameHandler}
            className="modalItem"
          />
          <p>Your school email: </p>
          <Input
            type="text"
            placeholder="eg. mfdoom@cis.edu.hk"
            onChange={emailHandler}
            className="modalItem"
          />
          <p>On which date do you need a substitute? </p>
          <div>
            <DateSelect
              day={day}
              month={month}
              year={year}
              dayHandler={dayHandler}
              monthHandler={monthHandler}
              yearHandler={yearHandler}
            />
          </div>
          <p>What time does the class begin (24 hour format)? </p>
          <Input
            type="text"
            placeholder="eg. 0755"
            className="modalItem"
            onChange={startHandler}
          />
          <p>How long is the substitute needed for (in minutes)? </p>
          <Input
            type="text"
            placeholder="eg. 75"
            className="modalItem"
            onChange={durationHandler}
          />
          <p>What subject do they need to teach? </p>
          <div>
            <SubjectSelect subject={subject} subjectHandler={subjectHandler} />
          </div>
        </div>
      </Modal.Content>
      <Modal.Action passive onClick={props.closeModal}>
        Cancel
      </Modal.Action>
      <Modal.Action onClick={submitHandler}>Submit</Modal.Action>
    </Modal>
  );
}
// teacherName = "Dumb Card";
// teacherEmail = "abc@abc.com";
// start = "1234";
// duration = "60";
// subject = "Aliens";
// date = "00/00/0000";

export default RequestModal;
