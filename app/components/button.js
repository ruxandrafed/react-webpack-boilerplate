import React from "react";

export default React.createClass({

  handleOnClick: function() {
    this.props.onClick()
  },

  render: function(){

    return (
      <button type="submit" className="btn btn-info" onClick={this.handleOnClick}>{this.props.name}</button>
    )
  }
})
