import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import '../App.css';
import PropTypes from 'prop-types';

const Hello = ({ name, id, complete, onClick, onRemoveClick }) => {

  return (
    <div>
      <ListGroup
        className="btn todo"
      >
        <ListGroup.Item style={{ 
          backgroundColor: complete ? 'lightgreen' : 'white', 
          textDecoration:  complete ? 'line-through': 'none'}}>
          {name}
        </ListGroup.Item>
        <ListGroup.Item>
          <Button
            className="completeButton"
            variant={complete ? 'secondary': 'primary'}
            id={id}
            onClick={() => onClick(id)}
          >
            {complete ? 'Complete' : 'Incomplete'}
          </Button>
          <Button
            variant="danger"
            onClick={() => onRemoveClick(id)}
          >
            Remove from list
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

Hello.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    complete: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired
}

export default Hello;
