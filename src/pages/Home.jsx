import React, {useState} from 'react'
import Header from '../components/Header';
import {data} from '../../data.js'
import Menus from './Menus'

const Home = () => {
    const [modules] = useState(data)

    return (
        <div>
            <Header title='All modules'/>
            <Menus modules={modules}/>
        </div>
    );
}

export default Home