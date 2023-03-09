import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import MyButton from './MyButton';
// import MyList from './MyList';

const root = ReactDOM.createRoot(document.getElementById('root'));


// directly change the props without variable 
// const appstate = {
//   disable:true,
//   text:"first text",
//   list:["monday","tuesday","wednesday","thursday"]
// }

// function render(props){
//   root.render(
//     <div>
//     <MyButton disable={props.disable} text={props.text} />
//     <MyList list={props.list} />
//     </div>
//   )
// }


// render(appstate);

// setTimeout(() => {
//   appstate.disable=false;
//   appstate.text="second Text";
//   appstate.list=["a","b","c","d","e","f","g","h","i"];
//   render(appstate);
// },4000);


///----------------------------------------------------------------------------------------
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

