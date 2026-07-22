import './App.css';
import Weather from "./weather.js"
import Footer from "./footer.js"

function App() {
  return (
    <div className="App">
      <div className="container">
          <Weather />
          <Footer />
      </div>
    </div>
  );
}

export default App;
