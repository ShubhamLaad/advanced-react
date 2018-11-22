import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Counter from './Counter';

const DiffCounter = () => {
  return (
    <div>
      <p>
        <b>
          This is an example of error boundaries in React 16.
      <br /><br />
          Click on the numbers to increase the counters.
      <br />
          The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
    </b>
        Error screen only shows for development mode not for production.
      </p>
      <hr />
      <ErrorBoundary>
        <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
        <Counter />
        <Counter />
      </ErrorBoundary>
      <hr />
      <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
      <ErrorBoundary><Counter /></ErrorBoundary>
      <ErrorBoundary><Counter /></ErrorBoundary>
    </div>)
}

export default DiffCounter;
