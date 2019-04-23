import React, { Component } from 'react';


const Body = (props)=>{
    return(
        <div id='body'>
            <div className='weather_item'><i className="fas fa-tint">{Math.round(props.w_data.humidity)}</i></div>
            <div className='weather_item'><i className="fas fa-wind">{Math.round(props.w_data.windSpeed)}</i></div>
            <div className='weather_item'><i className="fas fa-temperature-low">{Math.round(props.w_data.lowTemperature)}</i></div>
        </div>
        )
}
export default Body;