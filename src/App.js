import './App.css';
import { useFetchApi } from './hooks/useFetchApi';
import Header from './core/Header';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Episodes from './pages/Episodes';
function App() {
  const { loading, data: characters } = useFetchApi('https://www.breakingbadapi.com/api/characters');
  console.log(characters, loading);
  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="episodes" element={ <Episodes/> } />
      </Routes>
    </>
    
    
  );
}

export default App;
