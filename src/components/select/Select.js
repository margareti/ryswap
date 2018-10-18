import React, { Component } from 'react';
import './select.scss';

class Select extends Component {

  render(){
    return (
      <select name={this.props.name} onChange={this.props.handleChange}>
       <option value=""></option>
      {
        this.props.options.map(
          option => (
            <option key={option.id} value={option.id}>{option[this.props.displayName]}</option>  
          )
        )
      }
    </select>
    )
  }
}
export default Select;