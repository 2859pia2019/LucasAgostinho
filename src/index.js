import React, { Component } from 'react';
import { render } from 'react-dom';
// import Hello from './Hello';
import Aluno from './aluno';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Aluno nome="Ana" curso="SI"/>
        <Aluno nome="João" curso="SI"/>
        <Aluno nome="Maria" curso="SI" />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
