import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Wonderland",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
        weatherMain: "Haze",
        weatherIcon: "50d",
    });

    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    }

    return (
        <div>
            <h2>Weather App by Arpan</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} updateInfo={updateInfo}/>
        </div>
    )
}