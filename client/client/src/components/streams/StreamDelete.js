import React from 'react';
import Modal from '../Modal';

const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );

  // Used React.Fragment since semantic ui css does not work with a div and causes buttons to be not spaced correctly
  // It returns multiple elements but has no presence in the DOM
  // Upon implementation the div tag did not cause any error. Might have been fixed by semantic ui

  return (
    <div>
      StreamDelete
      <Modal
        title="Delete stream"
        content="Are you sure you want to delete this stream"
        actions={actions}
      />
    </div>
  );
};

export default StreamDelete;
