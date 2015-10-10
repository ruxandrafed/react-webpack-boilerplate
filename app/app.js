import React from "react";
import Application from "./components/application"

// React.render(
//   React.createElement('h1',{},'Hello World!'),
//   document.body
// );

// {} for options
// third element can be an array of strings, or a string of react elements

// React.render(
//   React.createElement('ul',{}, [
//     React.createElement('li', {}, 'buy dog food'),
//     React.createElement('li', {}, 'call mom and dad'),
//     React.createElement('li', {}, 'sleep'),
//     ]),
//   document.body
// );

React.render(
  <Application />,
  document.body
);
