import React from 'react';
import Search from './components/searchEntry';
import Information from './components/searchInformation';
import History from './components/searchHistory';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: []
    };
  }

  render() {
    return (
      <div className='container bg'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='theader'>
              <h1 >ORIGIN WEATHER APPLICATION</h1>
              <p className='lead'>{"Always know if you'll need an umbrella"}</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <Search />
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-6'>
            <Information />
          </div>
          <div className='col-sm-6'>
            <History />
          </div>
        </div>
      </div>
    );
  }
}
