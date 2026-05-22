import "@/App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomeUpdated";
import Give from "./pages/Give";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/give" element={<Give />} />
        </Routes>
      </HashRouter>
      <Toaster />
    </div>
  );
}

export default App;
