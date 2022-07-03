import { Route, Routes } from "react-router-dom";
import AddAlbum from "./containers/AddAlbum";
import Albums from "./containers/Albums";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Albums />} />
        <Route path="/album/create" element={<AddAlbum />} />
      </Routes>
    </div>
  );
}

export default App;
