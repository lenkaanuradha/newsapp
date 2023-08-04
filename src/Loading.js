import React, { Component } from 'react';
import spinner from "./spinner.gif";
export class Loading extends Component {
  render() {
    return (
      <div>
        <img src={spinner} alt="loading"style={{height:'5rem'}} />
      </div>
    )
  }
}

export default Loading;
