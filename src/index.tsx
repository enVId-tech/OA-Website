import React from 'react';
import ReactDOM from 'react-dom/client';
import RenderPages from './RenderPages';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RenderPages />
  </React.StrictMode>
);