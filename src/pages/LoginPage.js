import React, { useState } from "react";

// component imports
import LoginBox from "../components/LoginBox/LoginBox.js";
import { Text, Button, Modal, Input, useToasts } from "@geist-ui/react";
import SubjectSelect from "../components/RequestModal/SubjectSelect";

//firebase
import { auth, database } from "../fire";

function LoginPage() {
  //states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [password, setPassword] = useState("");

  //Toast
  const [, setToast] = useToasts();
  const click = (type) => {
    if (type === "success") {
      setToast({
        text: "Sucessfully created an account, " + name,
        type,
      });
    } else if (type === "warning") {
      setToast({
        text: "Something's wrong, try again",
        type,
      });
    }
  };

  //Cancel handler
  const [state, setState] = useState(false);
  const openModal = () => setState(true);
  const closeHandler = (event) => {
    setState(false);
    console.log("closed");
  };

  //Submit handler
  const submitHandler = (event) => {
    if (name === "") {
      click("warning");
      return;
    }
    if (email === "") {
      click("warning");
      return;
    }
    if (password === "") {
      click("warning");
      return;
    }
    if (subject === "") {
      click("warning");
      return;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        console.log(user.user.uid);
        database.ref("users/" + user.user.uid).set({
          name: name,
          email: email,
          subject: subject,
        });
        click("success");
        setState(false);
      })
      .catch((error) => {
        click("warning");
      });
  };

  //Name handler
  const nameHandler = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  //Email handler
  const emailHandler = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  //Subject handler
  const subjectHandler = (val) => {
    setSubject(val);
    console.log(val);
  };

  //Password handler
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  return (
    <header className="App-header">
      <Text h1>Substitute</Text>
      <LoginBox />
      <Button type="success" ghost onClick={openModal}>
        Create new account
      </Button>
      <Modal open={state} onClose={closeHandler}>
        <Modal.Title>Sign Up</Modal.Title>
        <Modal.Content>
          <p>What subject do you primarily teach? </p>
          <div>
            <SubjectSelect subject={subject} subjectHandler={subjectHandler} />
          </div>
          <div>
            <p>Your full name: </p>
            <Input
              type="text"
              placeholder="eg. Daniel Dumile"
              onChange={nameHandler}
              className="modalItem"
            />
          </div>
          <p>Your school email: </p>
          <Input
            type="text"
            placeholder="eg. mfdoom@cis.edu.hk"
            onChange={emailHandler}
            className="modalItem"
          />
          <p>Input a password: </p>
          <Input.Password
            type="text"
            placeholder="Password"
            onChange={passwordHandler}
            className="modalItem"
          />
        </Modal.Content>
        <Modal.Action passive onClick={() => setState(false)}>
          Cancel
        </Modal.Action>
        <Modal.Action onClick={submitHandler}>Submit</Modal.Action>
      </Modal>
    </header>
  );
}

export default LoginPage;
