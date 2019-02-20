import React, { Component } from 'react'

export default class Checkbox extends Component {
    state = {
        checked: this.props.checked || this.props.defaultChecked
    }

    render() {
        let inputProps = {}

        if (this.props.checked) inputProps.checked = this.props.checked;
        if (this.props.defaultChecked) inputProps.defaultChecked = this.props.defaultChecked;
        if (this.props.disabled) inputProps.disabled = true;

        inputProps.onChange = e => {
            this.setState({ checked: e.target.checked })

            if (this.props.onChange) {
                this.props.onChange(e)
            }
        };

        return (
            <div className={`form-group type_checkbox ${this.state.checked ? 'active' : ''}`}>


                <input
                    type="checkbox"
                    id={this.props.id}
                    {...inputProps}
                />

                <label htmlFor={this.props.id}><span className="checkmark" /> {this.props.label}</label>

            </div>
        )
    }
}
