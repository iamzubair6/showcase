import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Cards from "./Pages/Cards";
import Loader from "./Pages/Loader";
import Slider from "./Pages/Slider";
import "./index.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Loader />} />{" "}
        <Route path="" element={<Loader />} />
        <Route path="slider" element={<Slider />} />
        <Route path="cards" element={<Cards />} />
      </Route>
    </Routes>
  );
}

export default App;
