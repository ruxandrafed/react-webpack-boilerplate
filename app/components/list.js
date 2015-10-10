import React from "react";

export default React.createClass({
  render: function(){
    // console.log(this.props)
    var todos = this.props.todos.map(function(todo, index){
      return  <li className = "list-group-item" key={index}> {todo } </li>
    })
    return (
      <ul className="list-group">
        {todos}
      </ul>
    )
  }
})
