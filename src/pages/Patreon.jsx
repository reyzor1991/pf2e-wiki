import React, {useState} from 'react'
import Header from '../components/Header'
import Menus from './Menus';
import {data} from '../../data'

const Patreon = () => {
    const [modules] = useState(data)
    return (
        <div>
            <Header title='Free modules'/>
            <Menus modules={modules.filter((module) => module.price === 'patreon')}/>
        </div>
    );
}

export default Patreon