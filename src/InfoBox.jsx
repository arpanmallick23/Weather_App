import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import GrainIcon from '@mui/icons-material/Grain';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FoggyIcon from '@mui/icons-material/Foggy';
import TornadoIcon from '@mui/icons-material/Tornado';
import StormIcon from '@mui/icons-material/Storm';

// One themed entry per OpenWeatherMap "main" weather category.
// Each has its own real photo + icon + label, so the picture
// genuinely changes to match the type of weather, not just temp/humidity.
const CLEAR = "https://images.unsplash.com/photo-1689147068964-3db79cd44d2f?w=1000&auto=format&fit=crop&q=60";
const CLOUDS = "https://images.unsplash.com/photo-1748711243691-40c63a74a01a?w=1000&auto=format&fit=crop&q=60";
const RAIN = "https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?w=1000&auto=format&fit=crop&q=60";
const THUNDERSTORM = "https://images.unsplash.com/photo-1761687353579-d5217d0415a7?w=1000&auto=format&fit=crop&q=60";
const SNOW = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=1000&auto=format&fit=crop&q=60";
const MIST = "https://images.unsplash.com/photo-1732130318657-c8740c0f5215?w=1000&auto=format&fit=crop&q=60";

const WEATHER_THEMES = {
    Clear: { label: "Clear Sky", icon: WbSunnyIcon, image: CLEAR },
    Clouds: { label: "Cloudy", icon: WbCloudyIcon, image: CLOUDS },
    Rain: { label: "Rainy", icon: GrainIcon, image: RAIN },
    Drizzle: { label: "Drizzle", icon: GrainIcon, image: RAIN },
    Thunderstorm: { label: "Thunderstorm", icon: ThunderstormIcon, image: THUNDERSTORM },
    Squall: { label: "Squall", icon: StormIcon, image: THUNDERSTORM },
    Tornado: { label: "Tornado", icon: TornadoIcon, image: THUNDERSTORM },
    Snow: { label: "Snowy", icon: AcUnitIcon, image: SNOW },
    Mist: { label: "Misty", icon: FoggyIcon, image: MIST },
    Fog: { label: "Foggy", icon: FoggyIcon, image: MIST },
    Haze: { label: "Hazy", icon: FoggyIcon, image: MIST },
    Smoke: { label: "Smoky", icon: FoggyIcon, image: MIST },
    Dust: { label: "Dusty", icon: FoggyIcon, image: MIST },
    Sand: { label: "Sandy", icon: FoggyIcon, image: MIST },
    Ash: { label: "Volcanic Ash", icon: FoggyIcon, image: MIST },
};

const DEFAULT_THEME = { label: "Weather", icon: WbCloudyIcon, image: CLOUDS };

function getTheme(weatherMain) {
    return WEATHER_THEMES[weatherMain] || DEFAULT_THEME;
}

export default function InfoBox({ info }) {
    const theme = getTheme(info.weatherMain);
    const WeatherIcon = theme.icon;

    return (
        <div>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <Box sx={{ position: "relative" }}>
                        <CardMedia
                            sx={{ height: 160 }}
                            image={theme.image}
                            title={theme.label}
                        />
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                px: 1.5,
                                py: 0.75,
                                background: "linear-gradient(0deg, rgba(0,0,0,0.55), rgba(0,0,0,0))",
                                color: "#fff",
                            }}
                        >
                            <WeatherIcon fontSize="small" />
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                {theme.label}
                            </Typography>
                        </Box>
                    </Box>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temp = {info.tempMin}&deg;C</p>
                            <p>Max Temp = {info.tempMax}&deg;C</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
