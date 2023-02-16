

import React from 'react';
import { Outlet } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>this is a layout of the about page!</h1>
      <Outlet />
    </div>
  );
}

export { About };