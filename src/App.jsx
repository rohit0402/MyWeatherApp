import "./App.css";
import WeatherApp from "./WeatherApp";
import Footer from "./footer";

function App() {
  return (
    <div className="content">
      {" "}
      {/* Wrapper for centering */}
      <div className="weather">
        <WeatherApp />
      </div>
      <Footer />
    </div>
  );
}

export default App;
