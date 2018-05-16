import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { WithLogging } from './withLogging';

class App extends Component {
  render() {

    const { name, logging } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello {name}</h1>

          <div>
            <button onClick={() => logging.log('Logging a log')}>Log</button>
            <button onClick={() => logging.warn('Logging a warn')}>Warn</button>
            <button onClick={() => logging.error('Logging a error')}>Error</button>
          </div>
        </header>
      </div>
    );
  }
}

export default WithLogging(App);
