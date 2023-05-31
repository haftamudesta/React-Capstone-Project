import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Memes from './components/memes/memes';
import MemesDetails from './components/memes/MemesDetails';

function App() {
  return (
    <>
      <main className="main__app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Memes />} />
          <Route path="/memesDetail/:memesId" element={<MemesDetails />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
