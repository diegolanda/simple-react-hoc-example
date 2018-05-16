import React, { Component } from 'react';

export const WithLogging = WrappedComponent => class extends Component {
  static displayName = `WithLogging(${WrappedComponent.displayName || WrappedComponent.name})`;

  superHookToService = () => {
    console.log('Logging to your super log mechanism');
  }

  log = (message) => {
    console.log(message);
    this.superHookToService();
  }

  warn = (message) => {
    console.warn(message);
    this.superHookToService();
  }

  error = (message) => {
    console.error(message);
    this.superHookToService();
  }

  render() {
    const { log, warn, error, props } = this;

    return (
      <WrappedComponent {...props} logging={{
        log,
        warn,
        error
      }}/>
    );
  }
};
