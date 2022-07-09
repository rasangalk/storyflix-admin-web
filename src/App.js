import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import AddAlbum from "./containers/AddAlbum";
import Albums from "./containers/Albums";
import AlbumView from "./containers/AlbumView";
import EpisodeHome from "./containers/EpisodeHome";
import Episodes from "./containers/Episodes";
import EpisodeView from "./containers/EpisodeView";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Albums />} />
        <Route path="/album/create" element={<AddAlbum />} />
        <Route path="/album/:albumId" element={<AlbumView />} />
        <Route path="/episodes" element={<EpisodeHome />} />
        <Route path="/episodes/:albumId" element={<Episodes />} />
        <Route path="/episode/:epiID" element={<EpisodeView />} />
      </Routes>
    </div>
  );
}

export default App;
