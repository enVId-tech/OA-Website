import React from 'react';
import ReactDOM from 'react-dom/client';
import RenderPages from './RenderPages.global';

const root = ReactDOM.createRoot(
  document.getElementById('reactRootMain') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RenderPages />
  </React.StrictMode>
);