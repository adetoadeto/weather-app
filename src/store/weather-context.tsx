import { createContext, useEffect, useRef, useState, type RefObject } from "react";

type WeatherContextType = {
    enteredLocation: RefObject<HTMLInputElement | null>,
    location: string,
    searchHistory: string[] | null,
    weatherData: Record<string, any> | null,
    inProgress: boolean,
    notFound: boolean,
    serverError: boolean,
    isImperial: boolean,
    getWeatherData: () => void,
    handleUnitSwitch: () => void,
    handleRetry: () => void,
    handleSelectHistory: (selection: string) => void
}

export const WeatherContext = createContext<WeatherContextType>({
    enteredLocation: { current: null },
    location: "",
    searchHistory: null,
    weatherData: null,
    inProgress: false,
    notFound: false,
    serverError: false,
    isImperial: false,
    getWeatherData: () => { },
    handleUnitSwitch: () => { },
    handleRetry: () => { },
    handleSelectHistory: () => { },
})

const WeatherContextProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const enteredLocation = useRef<HTMLInputElement>(null)
    const [location, setLocation] = useState("")
    const [searchHistory, setSearchHistory] = useState(null)
    const [weatherData, setWeatherData] = useState(null)
    const [inProgress, setInProgress] = useState(false)
    const [notFound, setNotFound] = useState(false)
    const [serverError, setServerError] = useState(false)
    const [isImperial, setIsImperial] = useState(true)

    useEffect(() => {
        if (!weatherData) {
            return
        }
        getWeatherData()
    }, [isImperial])

    useEffect(() => {
        const history = JSON.parse(localStorage.getItem("searchHistory") ?? "[]")
        setSearchHistory(history)
    }, [location])

    const getGeocoding = async () => {
        const enteredValue = enteredLocation?.current?.value
        if (!enteredValue) {
            return
        }
        const existingHistory = localStorage.getItem("searchHistory") || ""
        if (existingHistory?.length <= 0) {
            localStorage.setItem("searchHistory", JSON.stringify([enteredValue]))
        } else {
            const searchHistory = JSON.parse(existingHistory)
            searchHistory.unshift(enteredValue)
            localStorage.setItem("searchHistory", JSON.stringify(searchHistory))
        }

        try {
            const geocoding = await fetch(`https://nominatim.openstreetmap.org/search?q=${enteredValue}&format=jsonv2&addressdetails=1&limit=1`)
            const geocodingData = await geocoding.json()

            if (geocodingData.length <= 0) {
                setInProgress(false)
                setNotFound(true)
                return
            }

            const location = geocodingData[0]
            const city = location.name
            // const state = location.address.state
            let country = location.address.country
            if (!country) {
                country = city
            }
            const formattedLocation = `${city === country ? city : city + ", " + country}`

            setLocation(formattedLocation)

            return {
                lat: geocodingData[0]?.lat,
                lon: geocodingData[0]?.lon
            }
        }
        catch (err) {
            setServerError(true)
        }
    }

    const getWeatherData = async () => {

        setInProgress(true)

        try {
            const values = await getGeocoding()
            const lon = values?.lon
            const lat = values?.lat

            const imperialUnit = "wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch"
            const metricUnit = "wind_speed_unit=kmh&temperature_unit=celsius&precipitation_unit=mm"
            const unit = isImperial ? imperialUnit : metricUnit

            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,weather_code&timezone=auto&${unit}`)

            if (!response.ok) {
                setServerError(true)
                setInProgress(false)
                return
            }

            const data = await response.json()

            if (!data) {
                setInProgress(false)
                setNotFound(true)
                return
            }

            setWeatherData(data)
            setNotFound(false)
            setInProgress(false)
        } catch (err) {
            setInProgress(false)
            setServerError(true)
        }
    }

    const handleUnitSwitch = () => {
        setIsImperial(prevState => !prevState)
    }

    const handleRetry = () => {
        setServerError(false)
    }

    const handleSelectHistory = (selection: string) => {
        if (!selection) {
            return
        }
        setLocation(selection)
    }

    const ctxValue = {
        enteredLocation,
        location,
        searchHistory,
        weatherData,
        inProgress,
        notFound,
        serverError,
        isImperial,
        getWeatherData,
        handleUnitSwitch,
        handleRetry,
        handleSelectHistory
    }

    return (
        <WeatherContext value={ctxValue}>{children}</WeatherContext>
    )
}

export default WeatherContextProvider;