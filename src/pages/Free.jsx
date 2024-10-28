import React, { useState } from 'react'
import Header from '../components/Header'
import Menus from './Menus';
import { data } from '../../data'

const Free = () => {
    const [modules]=useState(data)
    return (
        <div>
            <Header title='Free modules'/>
            {modules && (
                <Menus modules={modules.filter((module)=>module.price==='free')}/>
            )}
        </div>
    );
}

export default Free