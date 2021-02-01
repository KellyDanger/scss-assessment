import React from 'react';
import '../SingleSelect/SingleSelect.scss';

class ResponseModal extends React.Component {
  render() {
    return (
      <div id='modal'>
        <h1 className='modalHeader'>{this.props.header}</h1>
        <p className='modalBody'>{this.props.body}</p>
        <button onClick={this.props.onComplete} className='okBtn'>
          Ok
        </button>
      </div>
    );
  }
}

export default ResponseModal;
