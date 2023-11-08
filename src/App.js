import {BrowserRouter, Routes, Route} from "react-router-dom";
import MasyarakatList from "./components/MasyarakatList";
import AddMasyarakat from "./components/AddMasyarakat";
import EditMasyarakat from "./components/EditMasyarakat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MasyarakatList/>}/>
        <Route path="add" element={<AddMasyarakat/>}/>
        <Route path="edit/:id" element={<EditMasyarakat/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
