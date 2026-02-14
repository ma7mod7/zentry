import { AboutUs } from "./components/AboutUs";
import { Hero } from "./components/Hero";
import Features from "./components/Features";
import { useLenis } from "./hooks/useLenisScrolle";
import Story from "./components/Story";


function App() {

useLenis()
  return <>
  <div>
    <Hero />
    <AboutUs/>
    <Features/>
    <Story/>

  </div>
  </>;
}

export default App;
