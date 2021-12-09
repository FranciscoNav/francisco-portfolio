import React from 'react';

function MenuItems({menuItems}) {
    return (
        <div className='portfolio-projects'>
            {
                menuItems.map((item)=>{
                    return <div className="project" key={item.id}>
                        <div className='image-data'>
                            <img src={item.image} alt=""/>
                            <ul className='hover-items'>
                                <li>
                                    <a href={item.link} target="_blank">{item.icon1}</a>
                                    <a href={item.youTubeLink} target="_blank">{item.icon2}</a>
                                </li>
                            </ul>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <p>Placeholder for paragraph, Placeholder for paragraph, Placeholder for paragraph</p>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems;
