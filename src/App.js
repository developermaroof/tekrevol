import {
  Navbar,
  Banner,
  Sliders,
  Achievements,
  Projects,
  Skills,
  Contact,
  Services,
  Clients,
  Trends,
  Footer,
} from "./components";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Sliders />
      <Achievements />
      <Projects />
      <Skills />
      <Contact />
      <Services />
      <Clients />
      <Trends />
      <Footer />
    </div>
  );
}

export default App;
