import style from './weather.module.css';

interface Weather {
    name: string;
    main?: {
        temp: number;
        feels_like: number;
        humidity: number;
    };
    weather?: Array<{
        icon: string;
        main: string;
    }>;
    wind?: {
        speed: number;
    };
}

interface WeatherDisplayProps {
    weather: Weather | null;
}

export default function WeatherDisplay({ weather }: WeatherDisplayProps): JSX.Element {
    if (!weather) {
        return <div className={style.container}>Weather data not available.</div>;
    }

    return (
        <div className={style.container}>
            <div className={style.top}>
                <div className={style.location}>
                    <p>{weather.name || "Location not found"}</p>
                </div>
                <div className={style.temp}>
                    {weather.main ? <h1>{(weather.main.temp - 273.15).toFixed()} °C</h1> : null}
                </div>
                <div className={style.description}>
                    {weather.weather ? <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} /> : null}
                    {weather.weather ? <p>{weather.weather[0].main}</p> : null}
                </div>
            </div>

            {weather.name && (
                <div className={style.bottom}>
                    <div className={style.feels}>
                        {weather.main ? <p className={style.bold}>{(weather.main.feels_like - 273.15).toFixed()} °С</p> : null}
                        <p>Feels Like</p>
                    </div>
                    <div className={style.humidity}>
                        {weather.main ? <p className={style.bold}>{weather.main.humidity} %</p> : null}
                        <p>Humidity</p>
                    </div>
                    <div className={style.wind}>
                        {weather.wind ? <p className={style.bold}>{weather.wind.speed.toFixed()} MPH</p> : null}
                        <p>Wind Speed</p>
                    </div>
                </div>
            )}
        </div>
    );
}
