import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { makeFetch } from './redux/actions';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      nome: '',
    }
  }
  handleChange = ({target}) => {
    const {name, value} = target;
    this.setState({
      [name]: value
    })
  }
  
  render() {
  const { isntLoading, data, dispatch } = this.props;
  const { nome } = this.state;
  return (
    <div className="App">
      <input name="nome" onChange={this.handleChange} />
      <button onClick={() => dispatch(makeFetch(nome))}>Buscar</button>
      {isntLoading && <p>{JSON.stringify(data)}</p>}
    </div>
  );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  isntLoading: state.isntLoading,
})

export default connect(mapStateToProps)(App);
