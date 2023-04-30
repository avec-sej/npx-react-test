import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./css/styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> //useEffect 사용할때 이게 있으면 console.log 가 2번씩 찍힘.
    <App />
  // </React.StrictMode>
);

