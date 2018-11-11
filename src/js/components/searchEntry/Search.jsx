import React from 'react';

import { searchTheCity } from './searchAction';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(searchTheCity(this.state.name));
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
          <div className="btn-group mar1">
            <button className="btn tb2" type="button" name="name" value='San Diego' onClick={ this.handleChange }>SAN DIEGO</button>
            <button className="btn tb2" type="button" name="name" value='Kadoma' onClick={ this.handleChange }>KADOMA</button>
            <button className="btn tb2" type="button" name="name" value='Saigon' onClick={ this.handleChange }>SAIGON</button>
            <button className="btn tb2" type="button" name="name" value='London' onClick={ this.handleChange }>LONDON</button>
            <button className="btn tb2" type="button" name="name" value='Tokyo' onClick={ this.handleChange }>TOKYO</button>
          </div>
          <div className='input-group mb-3 in1'>
                <input type="text" className="form-control ls" name="name" placeholder='Enter city' value={ this.state.name } onChange={ this.handleChange }/>
            <div className='input-group-append'>
              <button className='btn tb3' type='button' onClick={ this.handleSubmit }>
                Go!
              </button>
            </div>
          </div>
      </form>
    );
  }
}
