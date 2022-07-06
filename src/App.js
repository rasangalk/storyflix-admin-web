import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import AddAlbum from "./containers/AddAlbum";
import Albums from "./containers/Albums";
import AlbumView from "./containers/AlbumView";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Albums />} />
        <Route path="/album/create" element={<AddAlbum />} />
        <Route path="/album/:albumId" element={<AlbumView />} />
      </Routes>
    </div>
  );
}

export default App;
