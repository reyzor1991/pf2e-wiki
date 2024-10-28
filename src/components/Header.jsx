import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';

const allLinks = [
    {
        title: 'Home',
        link: '/',
    },
    {
        title: 'Free',
        link: '/free',
    },
    {
        title: 'Patreon',
        link: '/patreon',
    }
];

const Header = ({title}) => {
    const [navs] = useState(allLinks)
    return (
        <>
            <div>
                <h1 className='h1'>{title}</h1>
            </div>
            <ul className='flex justify-center items-center gap-8'>
                {navs.map((nav, index) => (
                    <li key={index} className='li'>
                        <NavLink
                            to={nav.link}
                            className='navs'>
                            {nav.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Header