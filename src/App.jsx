import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import { getCharacter } from './api';
import './App.scss';
import { CommentsForCharacter } from './Components/CommentsForCharacter/CommentsForCharacter';

function App() {
  const [arrCharacters, setArrCharacters] = useState([]);
  const [nameCharacter, setNameCharacter] = useState('');

  useEffect(() => {
    getCharacter()
      .then((response) => response.json())
      .then((result) => setArrCharacters(result.results));
  }, []);

  const setName = (character, e) => {
    const element = e.target.parentElement;
    element.classList.add('active');
    setNameCharacter(character.name);
  };

  return (
    <div className="app">
      <main className="app__main">
        <div className="app__sidebar">
          <h1>Meet, these are our characters</h1>
          <ol className="postsList">
            {arrCharacters.map((character) => (
              <li key={uuidv4()} className={classNames('postsList__item', character.name === nameCharacter && 'active')}>
                <span className="textStyle">
                  Name:
                  {' '}
                  {character.name}
                </span>
                <span className="textStyle">
                  Birthday:
                  {' '}
                  {character.birth_year}
                </span>
                <button
                  type="button"
                  className="postsList__button"
                  onClick={(e) => {
                    setName(character, e);
                  }}
                >
                  Comment
                </button>
              </li>
            ))}
          </ol>
        </div>
        {nameCharacter ? (
          <div className="app__content">
            {nameCharacter ? (
              <CommentsForCharacter
                name={nameCharacter}
              />
            ) : ''}
          </div>
        ) : ''}
      </main>
    </div>
  );
}

export default App;
