import React, { Component } from 'react'

class Register extends Component {
  render() {
    return (
      <div className="container">
        <label htmlFor="new-task">Name</label>
        <input id="new-task" type="text" />
        <div className="padding" />
        <label htmlFor="new-task">Email</label>
        <input id="new-task" type="text" />
        <div className="padding" />
        <label htmlFor="new-task">Password</label>
        <input id="new-task" type="text" />
        <div className="padding" />
        <button className="login">Register</button>
        <div className="padding" />
        <button className="login">Login</button>
      </div>
    )
  }
}

export default Register;