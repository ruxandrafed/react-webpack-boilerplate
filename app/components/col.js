import React from "react";

export default React.createClass({
  render: function(){

    return (
      <div className={"col-md-" + this.props.size}>
        {this.props.children}
      </div>
    )
  }
})
