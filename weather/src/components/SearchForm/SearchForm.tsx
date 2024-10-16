import { useState } from 'react';
import style from './search.module.css'
import { Weather } from '../../types';

interface SearchFormProps {
    setLocation: (location: string) => void;
    setWeather: (weather: Weather | null) => void;
    checkData: boolean;
    setCheckData: (check: boolean) => void;
}

export default function SearchForm({ setLocation, setWeather, checkData, setCheckData }: SearchFormProps): JSX.Element {

    const [city, setCity] = useState<string>('');

    return <>
        <div className={style.search}>

            <button onClick={() => {
                setWeather(null);
                setCity('');
                setCheckData(true)
            }}>Reset</button>

            <input value={city} type="text" onChange={(e) => setCity(e.target.value)} placeholder='enter location' />
            <button onClick={() => setLocation(city)}>Search</button>

        </div>
        <div> {!checkData ? <p className={style.error}>I can't determine the location, try again</p> : null}</div>
    </>
}