require('./css/bootstrap.css')

import React from "react";
import Application from "./components/application"

var whatever = "hello"

React.render(
  <Application name="Ruxandra" age="29" whatever={whatever} />,
  document.body
);
