import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PokeLanding from "./pages/PokeLanding";
import PokemonDetail from "./pages/PokemonDetailCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokeLanding />} />
        <Route path="/:id" element={<PokemonDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;
