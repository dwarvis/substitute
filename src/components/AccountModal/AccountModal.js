import React, { useState } from "react";
import { Modal } from "@geist-ui/react";

// firebase
import { auth, database } from "../../fire";
import { Redirect } from "react-router-dom";

function AccountModal(props) {
  const [loggedOut, setLoggedOut] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  function logoutHandler() {
    auth.signOut().then(() => {
      props.closeModal();
      setLoggedOut(true);
    });
  }

  if (auth.currentUser != null) {
    var userId = auth.currentUser.uid;

    database
      .ref("/users/" + userId)
      .once("value")
      .then((snapshot) => {
        var data = snapshot.val();
        setName(data.name);
        setEmail(data.email);
        setSubject(data.subject);
      });
  }

  return (
    <Modal open={props.open} onClose={props.onClose}>
      {loggedOut ? <Redirect to="/login" /> : null}
      <Modal.Title>Account Information</Modal.Title>
      <Modal.Content></Modal.Content>
      <Modal.Subtitle>Name: {name}</Modal.Subtitle>
      <Modal.Subtitle>Email: {email}</Modal.Subtitle>
      <Modal.Subtitle>Subject: {subject}</Modal.Subtitle>
      <Modal.Action passive onClick={props.closeModal}>
        Cancel
      </Modal.Action>
      <Modal.Action onClick={logoutHandler}>Logout </Modal.Action>
    </Modal>
  );
}

export default AccountModal;
