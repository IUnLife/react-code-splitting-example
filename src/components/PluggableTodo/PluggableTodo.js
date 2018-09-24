import React, { Component } from 'react';
import { connect } from 'react-redux';

import addItem from '../../actions/addItem.action';

class PluggableTodo extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h1>List Name</h1>
        <p>
          <label htmlFor="new-task">Add Item</label>
          <input id="new-task" type="text" />
          <button>Add</button>
        </p>

        <h3>Todo</h3>
        <ul id="incomplete-tasks">
          <li>
            <input type="checkbox" />
            <label>Pay Bills</label>
            <input type="text" />
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </li>
          <li className="editMode">
            <input type="checkbox" />
            <label>Go Shopping</label>
            <input
              type="text"
              value="Go Shopping"
              onChange={() => console.assert('hi')}
            />
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </li>
        </ul>

        <h3>Completed</h3>
        <ul id="completed-tasks">
          <li>
            <input type="checkbox" checked />
            <label>See the Doctor</label>
            <input type="text" />
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (storeState, props) => {
  console.log(storeState);
  return {
    list: storeState.lists.find(list => list.id === props.listId),
    ...props
  };
};

const mapActionsToProps = {
  addItem
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(PluggableTodo);
