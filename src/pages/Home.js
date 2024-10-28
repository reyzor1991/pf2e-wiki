import React, { useState } from 'react'
import Header from '../components/Header';
import { data } from '../data'
import Menus from './Menus'
import { CirclesWithBar } from 'react-loader-spinner'

const Home = () => {
    const [modules] = useState(data)
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        if (loading) {
            setLoading(false);
        }
    }, 700);

    return (
        <div>
            <Header title='Menu' />
            {loading && (
                <div className='flex items-center justify-center'>
                    <CirclesWithBar
                        height='50'
                        width='50'
                        color='#4fa94d'
                        wrapperStyle={{}}
                        wrapperClass=''
                        visible={true}
                        outerCircleColor=''
                        innerCircleColor=''
                        barColor=''
                        ariaLabel='circles-with-bar-loading'
                    />
                </div>
            )}

            {!loading && <Menus modules={modules} />}
        </div>
    );
}

export default Home