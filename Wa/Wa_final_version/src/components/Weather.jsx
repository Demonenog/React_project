import { FaWind } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi';
import React, { useState } from 'react';
import axios from 'axios';

import './Weather.css';

const Weather = () => {
	const [location, setLocation] = useState('');
	const [data, setData] = useState({});

	const API_KEY = 'cd270ad4f5682f92f5e308079ee09b62';
	const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

	const searchLocation = event => {
		if (event.key === 'Enter') {
			axios.get(url).then(response => {
				setData(response.data);
				console.log(response.data);
			});
			setLocation('');
		}
	};

	return (
		<div className='card'>
			<>
				<div className='search'>
					<input
						type='text'
						placeholder='Enter text ... 😀'
						value={location}
						onKeyDown={searchLocation}
						onChange={e => setLocation(e.target.value)}
					/>
				</div>
			</>
			<div className='weather'>
				{/* <img
					// Не могу понять почему не грузятся иконки погоды
					// src={`https://openweathermap.org/img/wn/${data.weather[0].icon}2x.png`}
					// src='http://openweathermap.org/img/wn/10d@2x.png'
					alt=''
					className='weather__icon'
				/> */}
				{data.weather ? (
					<p className='weather__icon'>{data.weather[0].description}</p>
				) : null}
				<div className='temp'>
					{data.main ? <h1>{data.main.temp.toFixed()} &deg;c</h1> : null}
				</div>
				<div className='city'>
					<h2>
						{data.name} {data.sys ? <span>, {data.sys.country}</span> : null}
					</h2>
				</div>
				<div className='details'>
					<div className='col'>
						<WiHumidity size={40} />
						<div>
							{data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
							{/* <p className='humidity'> 14% </p> */}
							<p>humidity</p>
						</div>
					</div>
					<div className='col'>
						<FaWind size={40} />
						<div>
							{data.wind ? (
								<p className='bold'>{data.wind.speed.toFixed()} km/h</p>
							) : null}
							<p>Wind Speed</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Weather;
