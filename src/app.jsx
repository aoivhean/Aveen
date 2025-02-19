import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/jsx/hero';
import AboutMe from './components/jsx/aboutme';
import MyProjects from './components/jsx/myprojects';
import Header from "./components/jsx/header";

function App() {
    return (
        <BrowserRouter>
            <div className="app-background">
                <Header />
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/aboutme" element={<AboutMe />} />
                    <Route path="/myprojects" element={<MyProjects />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;