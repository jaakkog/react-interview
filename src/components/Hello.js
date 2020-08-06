import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import '../App.css';
import PropTypes from 'prop-types';

const Hello = ({ name, id, complete, onClick, onRemoveClick }) => {
  let variant;
  let text;
  let color;
  let decoration;

  if (complete === true) {
    variant = 'secondary';
    text = 'Complete';
    color = 'lightgreen';
    decoration = 'line-through';
  } else {
    variant = 'primary';
    text = 'Incomplete';
    color = 'white';
  }


  return (
    <div>
      <ListGroup
        className="btn todo"
      >
        <ListGroup.Item style={{ backgroundColor: color, textDecoration: decoration }}>
          {name}
        </ListGroup.Item>
        <ListGroup.Item>
          <Button
            className="completeButton"
            variant={variant}
            id={id}
            onClick={() => onClick(id)}
          >
            {text}
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
