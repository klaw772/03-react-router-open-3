import React from 'react';
import { LinkButton } from '../LinkButton';

function Home() {
  return (
    <div>
      <h1>Hello from Home!</h1>
      <LinkButton url="/about" buttonText="About" />
      <LinkButton url="/greet/bob" buttonText="Hello" />
    </div>
  );
}

export { Home };