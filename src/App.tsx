import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Starfield from './pages/starfield/Starfield'

function App() {
    return (
        <BrowserRouter>
            <Layout />
            <Routes>
                <Route path="/" element={<div>Home Content</div>} />
                <Route path="starfield" element={<Starfield />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;
