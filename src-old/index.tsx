import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './AppRoutes.global.tsx';

const root: any = ReactDOM.createRoot(
  document.getElementById('reactRootMain') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);