import React, { Component } from 'react';
import { render } from 'react-dom';
import MyForm from './myForm';
import './style.css';
//import './style.scss';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <MyForm />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
