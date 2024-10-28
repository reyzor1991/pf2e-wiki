import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {HashRouter} from 'react-router-dom'

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
        <App/>
    </HashRouter>,
)