import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Hello = ({ todo, onClick, onRemoveClick }) => {
  let variant;
  let text;
  let color;
  let decoration;

  if (todo.complete === true) {
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
          {todo.name}
        </ListGroup.Item>
        <ListGroup.Item>
          <Button
            className="completeButton"
            variant={variant}
            id={todo.id}
            onClick={() => onClick(todo.id)}
          >
            {text}
          </Button>
          <Button
            variant="danger"
            onClick={() => onRemoveClick(todo.id)}
          >
            Remove from list
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

Hello.propTypes = {
    todo: PropTypes.any.isRequired,
    onClick: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired
}

export default Hello;
