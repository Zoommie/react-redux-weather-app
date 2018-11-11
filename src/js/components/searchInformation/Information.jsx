import React from 'react';

export default class Information extends React.Component {
  render() {
    const { info } = this.props;
    return (
      <div className='tb1 mb-3'>
        <div className='card-header'>CITY INFORMATION</div>
        <div className='card-body'>
          <div className='media'>
            <div className='media-body'>
              <div className='media-middle'>
                <h1 className='mt-3 mb-2 text-center'>
                  {info.name && (
                    <img
                      alt='Weather icon'
                      className='media-object align-middle'
                      src={ `http://openweathermap.org/img/w/${info.weather[0].icon}.png` }
                    />
                  )}{' '}
                  {info.name}
                </h1>

                <p className='mt-0 mb-1 text-center'>
                  <small>
                    {info.name
                      ? `Lat/Long: ${info.coord.lat}, ${info.coord.lon}`
                      : ''}
                  </small>
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className='row'>
            <div className=' col-sm-4 border-0'>
              {info.name && (
                <strong>
                  Temperature
                  <p className='text-success'>{info.main.temp}F</p>
                </strong>
              )}
            </div>
            <div className='col-sm-4 border-0'>
              {info.name && (
                <strong>
                  Pressure
                  <p className='text-success'>{info.main.pressure}</p>
                </strong>
              )}
            </div>
            <div className='col-sm-4 border-0'>
              {info.name && (
                <strong>
                  Humidity
                  <p className='text-success'>{info.main.humidity}%</p>
                </strong>
              )}
            </div>
          </div>
          
         <div className='row'>
            <div className='col-sm-4 border-0'>
              {info.name && (
                <strong>
                  Lowest Temp (F)
                  <p className='text-success'>{info.main.temp_min}F</p>
                </strong>
              )}
          </div>
          <div className=' col-sm-4 border-0'>
            {info.name && (
              <strong>
                Highest Temp (F)
                <p className='text-success'>{info.main.temp_max}F</p>
              </strong>
            )}
          </div>
          <div className='col-sm-4 border-0'>
            {info.name && (
              <strong>
                Wind Speed
                <p className='text-success'>{info.wind.speed}mph</p>
              </strong>
            )}
          </div>
        </div>
      </div>
      </div>
  );
}
}