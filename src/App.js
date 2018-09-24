import React, { Component } from 'react';
import { Route, Redirect, withRouter, Link } from 'react-router-dom';
import './App.css';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Lists from './components/Lists/Lists';
import PluggableTodo from './components/PluggableTodo/PluggableTodo';
// import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    import('react-modal').then(Modal => {
      this.Modal = Modal;
      this.Modal.setAppElement('#root');
      this.setState({ modalIsOpen: true });
    });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { pathname } = this.props.location;
    return (
      <div>
        <div>
          <button onClick={this.openModal}>Open Modal</button>
          {this.state.modalIsOpen && (
            <this.Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
              <button onClick={this.closeModal}>close</button>
              <div>I am a modal</div>
              <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
              </form>
            </this.Modal>
          )}
        </div>
        <Link to="/register">Register</Link> || <Link to="/login">Login</Link>
        {pathname === '/' ? <Redirect to="login" /> : ''}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/lists" component={Lists} />
        <PrivateRoute path="/lists/:id" component={PluggableTodo} />
      </div>
    );
  }
}

export default withRouter(App);
