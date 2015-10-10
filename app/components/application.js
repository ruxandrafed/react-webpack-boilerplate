import React from "react";

export default React.createClass({
  render: function(){
    return (
      React.createElement('ul',{}, [
        React.createElement('li', {}, 'buy dog food'),
        React.createElement('li', {}, 'call mom and dad'),
        React.createElement('li', {}, 'sleep'),
    ])
    )
  }
})
