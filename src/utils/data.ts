
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

const temperature = new WeatherElements("Temperature", "Celsius (°C)", "Fahrenheit (°F)")
const windSpeed = new WeatherElements("Wind Speed", "km/h", "mph")
const precipitation = new WeatherElements("Precipitation", "Millimeters (mm)", "Inches (in)")

export const unitItems = [temperature, windSpeed, precipitation]


