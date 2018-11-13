import React, { Component } from 'react';
import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter count={5} />
      </div>
    );
  }
}

export default App;
