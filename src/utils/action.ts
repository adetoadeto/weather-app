export const getWeatherData = async (location: any) => {

    if (!location) {
        return
    }

    try {
        const geocoding = await fetch(`https://nominatim.openstreetmap.org/search?q=${location}&format=jsonv2&addressdetails=1&limit=1`)
        const geocodingData = await geocoding.json()

        if (geocodingData.length <= 0) {
            return {
                error: true
            }
        }

        const lat = geocodingData[0]?.lat
        const lon = geocodingData[0]?.lon

        const weather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`)
        const weatherData = await weather.json()
   
        if (weatherData.length <= 0) {
            return {
                error: true
            }
        }
        return {
            data: weatherData
        }

    } catch (err) {
        console.log(err)
        return {
            notFound: true
        }
    }
}

