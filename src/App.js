import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
      <>
        <Header />
          <Router>
              <Main />
          </Router>
        <Footer />
      </>
  );
}

export default App;
