import type { ReactNode } from "react"

import CloudyIcon from "../components/WeatherIcons/Cloudy"
import DrizzleIcon from "../components/WeatherIcons/Drizzle"
import FogIcon from "../components/WeatherIcons/Fog"
import PartlyCloudyIcon from "../components/WeatherIcons/PartlyCloudy"
import RainIcon from "../components/WeatherIcons/Rain"
import SnowIcon from "../components/WeatherIcons/Snow"
import SunnyIcon from "../components/WeatherIcons/Sunny"
import ThunderstormIcon from "../components/WeatherIcons/Thunderstorm"

import cloud from "../assets/images/weather_icons/icon-cloud.png"
import drizzle from "../assets/images/weather_icons/icon-drizzle.webp"
import fog from "../assets/images/weather_icons/icon-fog.webp"
import partlyCloudy from "../assets/images/weather_icons/icon-partly-cloudy.webp"
import rain from "../assets/images/weather_icons/icon-rain.webp"
import snow from "../assets/images/weather_icons/icon-snow.webp"
import sunny from "../assets/images/weather_icons/icon-sun.png"
import thunderstorm from "../assets/images/weather_icons/icon-thunderstorm.png"


export const displayAnimatedIcon = (code: number): ReactNode => {
    let icon: ReactNode;
    if (code === 0) {
        icon = <SunnyIcon />
    } else if (code === 1) {
        icon = <PartlyCloudyIcon />
    } else if (code > 1 && code <= 3) {
        icon = <CloudyIcon />
    } else if (code >= 45 && code <= 48) {
        icon = <FogIcon />
    } else if (code >= 51 && code <= 57) {
        icon = <DrizzleIcon />
    } else if (code >= 61 && code <= 67 || code >= 80 && code <= 82) {
        icon = <RainIcon />
    } else if (code >= 71 && code <= 75 || code >= 85 && code <= 86) {
        icon = <SnowIcon />
    } else if (code >= 95 && code <= 99) {
        icon = <ThunderstormIcon />
    } else {
        icon = <SunnyIcon />
    }
    return icon
}

export const filterHourlyData = (data: Record<string, any> | null, selectedDay: number) => {

    const timeNow = new Date().getHours()
    const temperatureData = data?.hourly.temperature_2m
    const weatherCode = data?.hourly.weather_code
    let result: Record<string, string>[] = []

    data?.hourly.time.filter((item: any, index: number) => {

        const weatherDate = item.split("T")[0]
        const weatherDateDay = new Date(weatherDate).getDay()
        const weatherTime = item.split("T")[1].split(":")[0] //13:00

        const time = new Date()
        time.setHours(weatherTime) //3:30pm

        const formattedTime = time.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true }).split(":")

        const formattedWeatherTime = formattedTime[0]
        const weatherTimePeriod = formattedTime[1].split(" ")[1].toUpperCase()

        let count = 0

        if (weatherDateDay === selectedDay) {
            if (weatherTime > timeNow) {
                if (count >= 8) {
                    return
                }

                result.push({
                    time: formattedWeatherTime + " " + weatherTimePeriod,
                    temperature: temperatureData[index],
                    weatherCode: weatherCode[index]
                })

                count += 1
            }
        }
    })

    return result
}

export const displayStaticIcon = (code: number) => {
    let img;
    if (code === 0) {
        img = sunny
    } else if (code === 1) {
        img = partlyCloudy
    } else if (code > 1 && code <= 3) {
        img = cloud
    } else if (code >= 45 && code <= 48) {
        img = fog
    } else if (code >= 51 && code <= 57) {
        img = drizzle
    } else if (code >= 61 && code <= 67 || code >= 80 && code <= 82) {
        img = rain
    } else if (code >= 71 && code <= 75 || code >= 85 && code <= 86) {
        img = snow
    } else if (code >= 95 && code <= 99) {
        img = thunderstorm
    } else {
        img = ""
    }
    return img
}

export const dateFormatter = (date: string)=> {
    const formattedDate = new Date(date).toLocaleDateString("default", {weekday: "long", month: "short", day: "numeric", year: "numeric" })
    return formattedDate
}