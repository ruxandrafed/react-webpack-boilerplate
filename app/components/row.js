import React from "react";

export default React.createClass({
  render: function(){

    return (
      <div className="row">
        {this.props.children}
      </div>
    )
  }
})
