import React from 'react';
import { randomBytes } from 'crypto';

export default class Information extends React.Component {
  render() {
    return (
      <div className='tb1 mb-3'>
        <div className='card-header'>SEARCH HISTORY</div>
        <div className='card-body'>
          <table className='table table-striped border-0'>
            <tbody>
              {this.props.searchHistory.map((name, i) => (
                <tr key={ i }>
                  <td>{name.name}</td>
                  <td>{new Date(name.dt * 1000).toLocaleString(i)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
