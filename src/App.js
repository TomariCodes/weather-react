import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Weather App</h1>
          <button className="btn btn-primary">Hello</button>
        </header>
        <footer>
          <p>
            This project was coded by{" "}
            <a
              className="footer_link"
              href="https://tomari-southern.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tomari Southern
            </a>{" "}
            and is open-sourced on{" "}
            <a
              className="footer_link"
              href="https://github.com/TomariCodes/weather-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
