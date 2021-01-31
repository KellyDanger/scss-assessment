import React, { useState, useEffect } from 'react';
import './MultiSelect.scss';

// this is a stub for you to develop the following

/*
    PART 2 - OPTIONAL 
    
    Develop a component similar to the single select that allows multiple options to be selected. 

    This will include an ability to toggle each option, and then click a submit button for grading.

    Grading will indicate visually on each option if it was correct or not. This implies 4 states for each button - selected and correct, selected and incorrect, not selected and correct, not selected and incorrect.

    The generic feedback shown in the data is binary - either you got it 100% correct and get the correct feedback, or you don't. 
*/

const MultiSelect = (props) => {
  const [optionsArray, setOptionsArray] = useState(props.data.options);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (param, paramIndex) => {
    console.log('SELECTED', param, paramIndex);
    let selectedArray = [...optionsArray];
    selectedArray[paramIndex].selected = !selectedArray[paramIndex].selected;
    setOptionsArray(selectedArray);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const renderGrading = (option) => {
    if (option.correct && option.selected) {
      return <li className={`correctSelected`}>{option.text}</li>;
    } else if (option.correct && !option.selected) {
      return <li className={`correctNotSelected`}>{option.text}</li>;
    } else if (!option.correct && option.selected) {
      return <li className={`incorrectSelected`}>{option.text}</li>;
    } else {
      return <li className={`incorrectNotSelected`}>{option.text}</li>;
    }
  };

  return (
    <div className={`MultiSelect`}>
      <div className={`questionRow`}>
        <h1> {props.data.questionText} </h1>
      </div>
      <div className={`break`}></div>
      {!submitted ? (
        <div className={`buttonsMulti`}>
          {optionsArray.map((option, optionIndex) => {
            return (
              <div key={optionIndex}>
                <label> {option.name} ) </label>
                <button
                  className={`${option.selected}`}
                  onClick={() => {
                    handleSelect(option, optionIndex);
                  }}
                >
                  {option.text}
                </button>
              </div>
            );
          })}
          <button
            className={`okBtn`}
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </button>
        </div>
      ) : (
        <ul>
          {optionsArray.map((choice) => {
            return renderGrading(choice);
          })}
        </ul>
      )}
    </div>
  );
};

export default MultiSelect;
