import React, { useState, useEffect } from 'react';
import ResponseModal from '../ResponseModal/ResponeModal';
import './SingleSelect.scss';

const SingleSelect = (props) => {
  /*

        This component is built for you. Just skin it with the scss file. See the example.png. 

        Suggestions:
            rollover states on buttons.
            staging animations.
            make feedback a modal window.

    */

  const [selected, setSelected] = useState(-1);

  const handleSelect = (i) => {
    if (selected === -1) setSelected(i);
  };

  const selectedOption = props.data.options[selected];

  return (
    <div className={`SingleSelect`}>
      {selectedOption ? (
        <div className={`questionRow`}>
          <h1> {props.data.questionText}</h1>
        </div>
      ) : (
        <div className={`questionRow`}>
          <h1>{props.data.questionText}</h1>
        </div>
      )}
      <div className={`break`}></div>
      <div className={`buttons`}>
        {selected === -1 &&
          props.data.options.map((option, optionIndex) => {
            return (
              <div key={optionIndex}>
                <label> {option.name} ) </label>
                <button
                  onClick={() => {
                    handleSelect(optionIndex);
                  }}
                >
                  {option.text}
                </button>
              </div>
            );
          })}
      </div>
      <div className={`break`}></div>
      {selected > -1 && (
        <div
          className={`feedback ${
            selectedOption.correct ? 'correct' : 'incorrect'
          }`}
        >
          <>
            {selectedOption.correct ? (
              <ResponseModal
                header={props.data.feedback.correct.header}
                body={props.data.feedback.correct.body}
                onComplete={props.onComplete}
              />
            ) : (
              <ResponseModal
                header={props.data.feedback.incorrect.header}
                body={props.data.feedback.incorrect.body}
                onComplete={props.onComplete}
              />
            )}
          </>
        </div>
      )}
    </div>
  );
};

export default SingleSelect;
