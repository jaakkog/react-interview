import React from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../App.css';

const Bar = ({ onSubmit, newTodoName, onInputChange }) => (
  <Form
    className="wrapper"
    style={{ gridTemplateColumns: '2fr auto' }}
    onSubmit={onSubmit}
  >
    <Form.Group>
      <Form.Label
        id="input"
        className="Input"
        value={newTodoName}
        onChange={onInputChange}
      >
        <Form.Control placeholder="Add something to do" />
      </Form.Label>
      <Button
        className="submit"
        type="submit"
        value="Submit"
      >
        Submit
      </Button>
    </Form.Group>
  </Form>
);

Bar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    newTodoName: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired
}

export default Bar;
