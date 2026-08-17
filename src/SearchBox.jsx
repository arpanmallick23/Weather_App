import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

    const getWeatherInfo = async () => {
        if (!API_KEY) {
            throw new Error("API key is missing.");
        }

        const response = await fetch(
            `${API_URL}?q=${encodeURIComponent(
                city.trim()
            )}&appid=${API_KEY}&units=metric`
        );

        const data = await response.json();

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error(
                    "City not found. Please check the city name."
                );
            }

            if (response.status === 401) {
                throw new Error("Invalid OpenWeather API key.");
            }

            throw new Error(
                data.message || "Unable to fetch weather data."
            );
        }

        return {
            city: data.name,
            temp: data.main.temp,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            humidity: data.main.humidity,
            feelsLike: data.main.feels_like,

            // Weather description
            weather: data.weather[0].description,

            // IMPORTANT:
            // Used by InfoBox to select the correct picture
            // Clear, Clouds, Rain, Drizzle, Snow, Mist, Haze, etc.
            weatherMain: data.weather[0].main,
        };
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!city.trim()) {
            return;
        }

        setError("");

        try {
            const newInfo = await getWeatherInfo();

            updateInfo(newInfo);

            setCity("");
        } catch (err) {
            console.error(err);

            setError(
                err.message || "Something went wrong. Please try again."
            );
        }
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="Enter city name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                />

                <br />
                <br />

                <Button
                    variant="contained"
                    type="submit"
                >
                    Search
                </Button>

                {error && (
                    <p className="error-message">
                        {error}
                    </p>
                )}
            </form>
        </div>
    );
}