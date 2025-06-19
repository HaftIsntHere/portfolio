import "./App.css";
import Menubar from "./components/menubar";
import { Route, Routes } from "react-router";
import Home from "./routes/home";
import NotFound from "./routes/not_found";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollSmoother);
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
