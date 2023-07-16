import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Subscribe from "./Components/Subscribe/Subscribe";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-wrapper">
        <Home />
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
