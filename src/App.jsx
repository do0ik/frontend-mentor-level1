import { BrowserRouter, Routes, Route } from "react-router-dom"
import FourCard from "./pages/FourCard";
import InteractiveRating from "./pages/InteractiveRating";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<FourCard />} />
          <Route path="ir" element={<InteractiveRating />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
