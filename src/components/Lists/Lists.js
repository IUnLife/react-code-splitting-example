import React, { Component } from 'react'

class Lists extends Component {
  render() {
    return (
      <div className="container">
        <p>
          <label htmlFor="new-task">Add New Todo List</label>
          <input id="new-task" type="text" />
          <button>Add</button>
        </p>
        <h3>Current TODOs</h3>
        <ul>
          <li>
            <label>Office Tasks</label>
            <button>Open</button>
          </li>
          <li>
            <label>Logic Square Tasks</label>
            <button>Open</button>
          </li>
          <li>
            <label>ThinkZone Tasks</label>
            <button>Open</button>
          </li>
        </ul>
      </div>
    )
  }
}


export default Lists;