import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Calculate from '~/src/modules/Calculate';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>{Calculate.sum(2, 2)}</div>
        <div>{Calculate.subtract(42, 2)}</div>
        <div>{Calculate.multiply(3, 3)}</div>
        <div>{Calculate.divide(4, 4)}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
