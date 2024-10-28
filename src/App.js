import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Free from './pages/Free';
import Patreon from './pages/Patreon';

const App = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/free' element={<Free/>}></Route>
                <Route path='/patreon' element={<Patreon/>}></Route>
            </Routes>
        </div>
    );
}

export default App