import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import './NewCommentForm.scss';

export const NewCommentForm = ({
  setListComments,
  listComments,
  name,
}) => (
  <form className="newCommentForm" name="AddComment">
    <div className="form-field">
      <textarea
        name="body"
        placeholder="Type comment here"
        className="newCommentForm__input"
      />
    </div>
    <button
      type="submit"
      method="POST"
      className="newCommentForm__submit-button button"
      onClick={(e) => {
        const form = e.target.parentElement;
        e.preventDefault();
        if (!form.body.value) {
          return;
        }
        setListComments([...listComments, {
          id: uuidv4(),
          name,
          body: form.body.value,
        }]);

        form.body.value = '';
      }}
    >
      Add a comment
    </button>
  </form>
);

NewCommentForm.propTypes = {
  setListComments: PropTypes.func.isRequired,
  listComments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
  name: PropTypes.string.isRequired,
};
