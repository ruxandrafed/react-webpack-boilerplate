import React from "react";

export default React.createClass({

  handleChange: function(event){
    var value = event.target.value
    // this.setState({value: value})
    this.props.onChange(value)
  },
  render: function(){
    console.log(this.state)
    return (
      <form>
        <div className="form-group">
          <input className="form-control" type="text" value={this.props.taskField} onChange={this.handleChange}></input>
        </div>
      </form>
    )
  }
})
