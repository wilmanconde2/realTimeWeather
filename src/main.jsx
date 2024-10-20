import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/index.scss';
const urlAPIW = import.meta.env.VITE_API_KEY_W;
const urlAPIT = import.meta.env.VITE_API_KEY_T;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

export default {
  urlAPIW,
  urlAPIT
};
