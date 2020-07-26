import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Hello from './Hello';

test('renders todo', async () => {
  const todo = {
    name: 'Change car tyres'
  }

  const component = render(
    <Hello todo={todo} />
  )

  expect(component.container).toHaveTextContent(
    'Change car tyres'
  )
  
});

test('renders correct initial button texts', async () => {
  
  const todo = {
    name: 'Call Alice',
    complete: 'false',
    text: 'Incomplete'
  }

  const component = render(
    <Hello todo={todo}/>
  )

  component.debug()

  expect(component.container).toHaveTextContent(
    'Incomplete'
  )

  expect(component.container).toHaveTextContent(
    'Remove from list'
  )

});

test('remove button works', async () => {

  const todo = {
    name: 'Go to the supermarket',
  }

  const mockHandler = jest.fn()

  const component = render(
    <Hello todo={todo.name} onRemoveClick={mockHandler}/>
  )

  const button = component.container.querySelector('.btn-danger')

  fireEvent.click(button)

  expect(component.container).not.toHaveTextContent('Go to the supermarket')
  expect(mockHandler.mock.calls).toHaveLength(1) 
});

test('complete button works', async () => {

  const todo = {
    name: 'Call Alice',
    text: 'Incomplete',
    complete: 'false'
  }

  const mockHandler = jest.fn()

  const component = render(
    <Hello todo={todo} onClick={mockHandler}/>
  )

  const button = component.getByText('Incomplete')

  fireEvent.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)
});