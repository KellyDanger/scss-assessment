import React, { useState } from 'react';
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
  const [headText, setHeadText] = useState(props.data.questionText.header);
  const [bodyText, setBodyText] = useState(props.data.questionText.body);

  const handleSelect = (param, paramIndex) => {
    let selectedArray = [...optionsArray];
    selectedArray[paramIndex].selected = !selectedArray[paramIndex].selected;
    setOptionsArray(selectedArray);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    checkAnswers(optionsArray);
  };

  const checkAnswers = (array) => {
    for (let answer of array) {
      if (
        (answer.correct && !answer.selected) ||
        (answer.false && answer.selected)
      ) {
        setHeadText(props.data.feedback.incorrect.header);
        setBodyText(props.data.feedback.incorrect.body);
        break;
      } else {
        setHeadText(props.data.feedback.correct.header);
        setBodyText(props.data.feedback.correct.body);
      }
    }
  };

  const renderGrading = (option) => {
    if (option.correct && option.selected) {
      return (
        <tr>
          <td className={`correctSelected`}>{option.text}</td> <td>✅</td>
        </tr>
      );
    } else if (option.correct && !option.selected) {
      return (
        <tr>
          <td className={`correctNotSelected`}>{option.text}</td>
          <td> ❌</td>
        </tr>
      );
    } else if (!option.correct && option.selected) {
      return (
        <tr>
          <td className={`incorrectSelected`}>{option.text} </td>
          <td>❌</td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td className={`incorrectNotSelected`}>{option.text}</td>
          <td> ✅</td>
        </tr>
      );
    }
  };

  return (
    <div className={`MultiSelect`}>
      <div className={`questionRow`}>
        <h1> {headText} </h1>
        <h2>{bodyText}</h2>
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
        <table>
          <thead>
            <th>Option (your selections)</th>
            <th>Correct</th>
          </thead>
          <tbody>
            {optionsArray.map((choice) => {
              return renderGrading(choice);
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MultiSelect;
