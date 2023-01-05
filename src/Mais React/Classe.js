import React from 'react';

class Classe extends React.Component {
  constructor(props) {
    super();
    this.title = props.title;
    this.state = {
      contar: 0,
    };

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((state) => ({contar: state.contar + 1}));
  }

  componentDidMount(){
    console.log('Montou Agora')
  }
  componentDidUpdate(){
    console.log('Mudou agora')
    document.title = this.state.contar
  }
  componentWillUnmount(){
    console.log('Componente desmontou')
  }

  render() {
    return (
      <>
        <h1>{this.title}</h1>
        <p>{this.state.contar}</p>
        <button onClick={this.handleClick}>+1</button> <br />
      </>
    );
  }
}

export default Classe;
