import Nav from "./components/Nav/Nav"
import Error from "./components/Error/Error"
import Dashboard from "./components/Dashboard/Dashboard"
import WeatherContextProvider from "./store/weather-context"

const App = () => {
 
  return (
    <WeatherContextProvider>
      <Nav />
      <Dashboard/>
       <Error />
    </WeatherContextProvider>

  )
}

export default App
