import { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import SearchForm from './components/SearchForm/SearchForm';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';
import { Weather } from './types'

const keyApi = '282c885c813671f84ff97415ce72cc05'

export default function App() {
  const [location, setLocation] = useState<string>(localStorage.getItem('nameCity') || '');
  const [weather, setWeather] = useState<Weather | null>(null);
  const [checkData, setCheckData] = useState<boolean>(true);



  const getData = useCallback(async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${keyApi}`);
      localStorage.setItem('nameCity', location)
      setWeather(response.data);
      setCheckData(true);

    } catch (error) {
      console.log(error);
      setCheckData(false);

    }
  }, [location])

  useEffect(() => {
    getData()
  }, [getData]);


  return (
    <>
      <SearchForm setLocation={setLocation} setWeather={setWeather} checkData={checkData} setCheckData={setCheckData} />

      {checkData ? <WeatherDisplay weather={weather as Weather} /> : null}
    </>
  )
}