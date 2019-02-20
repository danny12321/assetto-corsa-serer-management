import React, { Component } from 'react'

export default class input extends Component {

  state = {
    value: this.props.value || this.props.defaultValue
  }

  render() {
    let inputProps = {
      type: this.props.type,
    }

    if (this.props.value) inputProps.value = this.props.value;
    if (this.props.defaultValue) inputProps.defaultValue = this.props.defaultValue;
    if (this.props.id) inputProps.id = this.props.id;

    inputProps.onChange = e => {
      this.setState({ value: e.target.value })

      if (this.props.onChange) {
        this.props.onChange(e)
      }
    };

    return (
      <div className={`form-group type_text ${this.state.value ? 'active' : ''}`}>

        <span
          className={this.state.value ? 'active' : ''}
        >{this.props.label}</span>

        <input
          {...inputProps}
        />

      </div>
    )
  }
}
