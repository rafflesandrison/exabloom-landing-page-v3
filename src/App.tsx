import ExabloomLandingPageV3 from "./pages/website/landing-page-v3";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ExabloomLandingPageV3 />} />
      </Routes>
    </div>
  );
};

export default App;
