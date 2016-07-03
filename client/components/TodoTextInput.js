import React, { Component } from 'react'

class TodoTextInput extends Component {
  static get propTypes() {
    return {
      className: React.PropTypes.string,
      onSave: React.PropTypes.func,
      placeholder: React.PropTypes.string,
      value: React.PropTypes.string
    }
  }

  constructor(props, context) {
    super(props, context)
    this.state = { value: this.props.value ? this.props.value : '' }
  }

  handleBlur(e) {
    this.save(e.target.value)
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.save(e.target.value)
    }
  }

  save(value) {
    this.props.onSave(value)
    this.setState({ value: '' })
  }

  render() {
    return (
      <input
        type="text"
        autoFocus="true"
        className={this.props.className}
        onBlur={this.handleBlur.bind(this)}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleKeyDown.bind(this)}
        placeholder={this.props.placeholder}
        value={this.state.value}
      />
    )
  }
}

export default TodoTextInput
