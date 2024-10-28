import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home.jsx";

const App = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Routes>
                <Route path='/' element={<Home/>}></Route>
            </Routes>
        </div>
    );
}

export default App