import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NewCommentForm } from '../NewCommentForm/NewCommentForm';
import './CommentsForCharacter.scss';

export const CommentsForCharacter = ({ name }) => {
  const [visibilityComments, setVisibilityComments] = useState(true);
  const [listComments, setListComments] = useState([]);
  const currentArrComments = listComments.filter((comment) => comment.name === name);

  return (
    <div className="comments">
      <section className="commentDetails__post">
        <h2>Comments to character</h2>
        <p className="commentDetails__name">{name}</p>
      </section>
      {name && (
      <section className="commentDetails__comments">
        {visibilityComments ? (
          <button
            type="button"
            className="button"
            onClick={() => {
              setVisibilityComments(false);
            }}
          >
            Hide
            {' '}
            {currentArrComments.length}
            {' '}
            comments
          </button>
        ) : (
          <button
            type="button"
            className="button"
            onClick={() => {
              setVisibilityComments(true);
            }}
          >
            Show
            {' '}
            {currentArrComments.length}
            {' '}
            comments
          </button>
        )}
        <ul className="commentDetails__list">
          {visibilityComments
              && currentArrComments.map((comment) => (
                <li key={comment.id} className="commentDetails__list-item">
                  <p>{comment.body}</p>
                  <button
                    type="button"
                    className="commentDetails__remove-button button"
                    onClick={() => {
                      setListComments(listComments.filter((comm) => comm.id !== comment.id));
                    }}
                  >
                    X
                  </button>
                </li>
              ))}
        </ul>
      </section>
      )}
      <section>
        <div className="commentDetails__form-wrapper">
          <NewCommentForm
            setListComments={setListComments}
            listComments={listComments}
            name={name}
          />
        </div>
      </section>
    </div>
  );
};

CommentsForCharacter.propTypes = {
  name: PropTypes.string.isRequired,
};
