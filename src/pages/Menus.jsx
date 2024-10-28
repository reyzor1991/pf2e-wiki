import React from 'react'

const Menus = ({modules}) => {
    return (
        <div className='module-container'>
            {modules.map((module) => (
                <div key={module.id}>
                    <div className="flex grid-cols-1 md:grid-cols-2">
                        <img src={module.img} alt='img' className='img' />
                        <div className=" flex flex-col">
                            <div className='title-price'>
                                <h5>{module.title}</h5>
                                <small className="price">{module.price.capitalize()}</small>
                            </div>
                            <div>
                                <small className='ml-3 w-full'>-----------------------------------</small>
                                <p className='para-menu'>{module.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Menus