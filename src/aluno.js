import React, { Component } from 'react';

class Aluno extends Component{
  
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div>
        <h2>Nome: {this.props.nome}</h2>
        <h4>Curso: {this.props.curso}</h4>
      </div>
    );
  }
}

export default Aluno;