import React from 'react';
import '../SingleSelect/SingleSelect.scss';

class Response extends React.Component {
  render() {
    return (
      <div id='response'>
        <h1 className='responseHeader'>{this.props.header}</h1>
        {this.props.choice && (
          <p className='responseBody'>You chose: {this.props.choice}</p>
        )}
        <p className='responseBody'>{this.props.body}</p>
        <button onClick={this.props.onComplete} className='okBtn'>
          Ok
        </button>
      </div>
    );
  }
}

export default Response;
