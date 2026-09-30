import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App_test from './App_test';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
  {/*<MyComponent/> 
   //<Car /> */}

   <React.StrictMode>
   {/* 
   
   <App />
   
   */} 

     <App_test /> 
  </React.StrictMode>
  </>
);


