import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/Main/Main";
import jquery from 'jquery'
window.jQuery = jquery
require('bootstrap')

function App() {
  // FUNCIONES LOGICAS VARIABLES ETC ETC
  return <div className="App">
    <Main/>

  </div>;
}

export default App;
