import React from 'react'

const Menus = ({modules}) => {
    return (
        <div className='module-container'>
            {modules.map((module) => (
                <div key={module.id}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <img src={module.img} alt='img' className='img' />
                        <div className=" flex flex-col">
                            <div className='title-price'>
                                <h5>{module.title}</h5>
                                <small>{module.price}</small>
                            </div>
                            <div>
                                <small className='ml-3 w-full'>-----------------------------------</small>
                                <p className='para-menu'>{module.para}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Menus