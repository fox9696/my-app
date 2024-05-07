import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './components/store/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
//App.js를 context의 Consumer로 사용하기위해
//따로 분활해 놓은 AuthContextProvider의 children으로 전달.

root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
);
