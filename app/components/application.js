import React from "react";
import List from "./list";
import TextField from "./textfield";
import Button from "./button";
import Row from "./row";
import Col from "./col"

export default React.createClass({

  getInitialState(){
    return {
      taskField: "",
      todos: ['Buy dog food', 'Call mom and dad', 'Get some sleep', 'Have fun']
    };
  },

  handleChange: function(value){
    this.setState({
      taskField: value
    })
  },

  handleOnClick: function() {
    this.setState({
      todos: this.state.todos.concat(this.state.taskField)
    })
  },

  render: function(){
    var name = this.props.name
    var todos = this.state.todos

    return (
      <div className = "container">

        <Row>
          <Col size={12}>
            <h1>{name + "'s to do list"}</h1>
          </Col>
        </Row>

        <Row>
          <Col size={11}>
            <TextField onChange={this.handleChange} value={this.state.taskField}/>
          </Col>
          <Col size={1}>
            <Button name="Submit" onClick={this.handleOnClick}/>
          </Col>
        </Row>

        <Row>
          <Col size={12}>
            <List todos={todos}/>
          </Col>
        </Row>

      </div>
    )
  }
})
