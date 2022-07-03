import { Route, Routes } from "react-router-dom";
import Albums from "./containers/Albums";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Albums />} />
      </Routes>
    </div>
  );
}

export default App;
