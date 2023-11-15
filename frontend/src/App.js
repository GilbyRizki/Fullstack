import {BrowserRouter, Routes, Route} from "react-router-dom";
import MasyarakatList from "./components/MasyarakatList";
import AddMasyarakat from "./components/AddMasyarakat";
import EditMasyarakat from "./components/EditMasyarakat";

import PengaduanList from "./components/PengaduanList.js";
import AddPengaduan from "./components/AddPengaduan";
import EditPengaduan from "./components/EditPengaduan";

import PetugasList from "./components/PetugasList.js";
import AddPetugas from "./components/AddPetugas";
import EditPetugas from "./components/EditPetugas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/masyarakat" element={<MasyarakatList/>}/>
        <Route path="/addMasyarakat" element={<AddMasyarakat/>}/>
        <Route path="/edit/:nik" element={<EditMasyarakat/>}/>

        <Route path="/pengaduan" element={<PengaduanList/>}/>
        <Route path="/addPengaduan" element={<AddPengaduan/>}/>
        <Route path="/editPengaduan/:id_pengaduan" element={<EditPengaduan/>}/>

        <Route path="/petugas" element={<PetugasList/>}/>
        <Route path="/addPetugas" element={<AddPetugas/>}/>
        <Route path="/editPetugas/:id_petugas" element={<EditPetugas/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
