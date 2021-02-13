import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import RequestCard from '../components/RequestCard/RequestCard';
import '../pages/pages.css';
import '../App.css';
import RequestModal from '../components/RequestModal/RequestModal';
import AccountModal from '../components/AccountModal/AccountModal';
import { auth, firestore } from '../fire';

// data import
import accData from '../fakeAccData';
import { Text, Button } from '@geist-ui/react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

function HomePage() {
  const [reqModalIsOpen, setReqModalIsOpen] = useState(false);
  const [accModalIsOpen, setAccModalIsOpen] = useState(false);
  const requestHandler = () => setReqModalIsOpen(true);
  const accountHandler = () => setAccModalIsOpen(true);
  const closeRequestHandler = (event) => {
    setReqModalIsOpen(false);
    console.log('closed');
  };
  const closeAccountHandler = (event) => {
    setAccModalIsOpen(false);
    console.log('closed');
  };

  //https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = String(yyyy + '/' + mm + '/' + dd);

  //firestore
  const substituteRequests = firestore.collection(' substituteRequest');
  const query = substituteRequests.orderBy('date', 'asc');
  const [requests] = useCollectionData(query, { idField: 'id' });

  return (
    <header className='App-header'>
      {auth.currentUser === null ? <Redirect to='/login' /> : null}
      <div className='headerRow'>
        <Text h1>Substitute</Text>
        <div className='buttonDiv'>
          <Button
            type='success'
            onClick={requestHandler}
            className='headerButton'
            ghost
          >
            New Substitute Request
          </Button>
          <Button
            type='secondary'
            onClick={accountHandler}
            className='headerButton'
            ghost
          >
            Account
          </Button>
        </div>
      </div>
      {/* TODO: remove dumb card */}
      <div className='cardList'>
        {/* loop */}
        {requests &&
          requests.map(function (obj, i) {
            return (
              <RequestCard
                id={obj.id}
                teacherName={obj.name}
                teacherEmail={obj.email}
                start={obj.time}
                duration={obj.duration}
                subject={obj.subject}
                date={obj.date}
                acceptedBy={obj.acceptedBy}
              />
            );
          })}
      </div>
      <RequestModal
        open={reqModalIsOpen}
        onClose={closeRequestHandler}
        closeModal={() => setReqModalIsOpen(false)}
      />
      <AccountModal
        open={accModalIsOpen}
        onClose={closeAccountHandler}
        closeModal={() => setAccModalIsOpen(false)}
        name={accData.name}
        email={accData.email}
        subject={accData.subject}
      />
    </header>
  );
}

export default HomePage;
