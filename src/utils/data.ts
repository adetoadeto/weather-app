
export const daysOfTheWeek = [
  { day: "Sunday", value: 0 },
  { day: "Monday", value: 1 },
  { day: "Tuesday", value: 2 },
  { day: "Wednesday", value: 3 },
  { day: "Thursday", value: 4 },
  { day: "Friday", value: 5 },
  { day: "Saturday", value: 6 }
]

class WeatherElements {
  heading: string;
  imperial: string;
  metric: string;

  constructor(heading: string, imperial: string, metric: string
  ) {
    this.heading = heading;
    this.imperial = imperial;
    this.metric = metric;
  }
}

const temperature = new WeatherElements("Temperature", "Fahrenheit (°F)", "Celsius (°C)")
const windSpeed = new WeatherElements("Wind Speed", "mph", "km/h")
const precipitation = new WeatherElements("Precipitation", "Inches (in)", "Millimeters (mm)")

export const unitItems = [temperature, windSpeed, precipitation]


