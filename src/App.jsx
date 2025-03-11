import { BrowserRouter, Routes, Route } from "react-router-dom"
import FourCard from "./pages/FourCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<FourCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
