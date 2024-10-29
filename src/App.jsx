import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Free from './pages/Free';
import Patreon from './pages/Patreon';
import ModuleInfo from "./pages/ModuleInfo.jsx";

const App = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/free' element={<Free/>}/>
                <Route path='/patreon' element={<Patreon/>}/>
                <Route path="/module/:id" element={<ModuleInfo/>}/>;
            </Routes>
        </div>
    );
}

export default App