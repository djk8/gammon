import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import bsCustomFileInput from 'bs-custom-file-input'


import './App.css';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <Toast show={show} onClose={() => toggleShow(!show)}>
      <Toast.Header>
        <strong className="mr-auto">React-Bootstrap</strong>
      </Toast.Header>
      <Toast.Body>{children}</Toast.Body>
    </Toast>
  );
};

const App = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Welcome To React-Bootstrap</h1>
      <ExampleToast>
        We now have Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
    </Jumbotron>
    <GammonUploadForm>
    </GammonUploadForm>
  </Container>
);

const GammonUploadForm = () => (
  <Form>
 <Form.Group controlId="formBasicEmail">
 <Form.File id="csv-custom" custom>
    <Form.File.Input isInvalid />
    <Form.File.Label>Upload Gammon as CSV</Form.File.Label>

      {/*<Form.File.Label data-browse="Button text">
        Custom file input
      </Form.File.Label>*/}
      <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
  </Form.File>
 </Form.Group>

 {/*<Form.Group controlId="formBasicPassword">
   <Form.Label>Password</Form.Label>
   <Form.Control type="password" placeholder="Password" />
 </Form.Group>
 <Form.Group controlId="formBasicCheckbox">
   <Form.Check type="checkbox" label="Check me out" />
 </Form.Group>*/}
 <Button variant="primary" type="submit">
   Upload File
 </Button>
</Form>
);

export default App;
