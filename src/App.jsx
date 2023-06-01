import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './components/navbar/NavBar';
import Memes from './components/memes/Memes';
import MemesDetails from './components/memes/MemesDetails';
import store from './redux/store';

function App() {
  return (
    <>
      <main className="main__app">
        <Provider store={store}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Memes />} />
            <Route path="/memesDetail/:memesId" element={<MemesDetails />} />
          </Routes>
        </Provider>
      </main>
    </>
  );
}

export default App;
