import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store";
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));


// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";

// const App = () => {
//   return (
//       <BrowserRouter basename={"/"}>
//         <Routes />
//       </BrowserRouter>
//     </Provider>
//   );
// };

// ReactDOM.render(<App />, document.getElementById("root"));
