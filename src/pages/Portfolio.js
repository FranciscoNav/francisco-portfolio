import React from 'react';
import Categories from '../components/Portfolio_Components/Categories';
import Title from '../components/Title'
import MenuItems from '../components/Portfolio_Components/MenuItems';
import PortfolioData from '../components/Portfolio_Components/PortfolioData';
import { useState } from 'react';

function Portfolio() {
    const [categories, setcategories]= useState(null);
    const [menuItems, setmenuItems]= useState(PortfolioData);

    return (
        <div className="PortfolioPage">
            <div>
                <Title title={'Portfolio'} span={'Portfolio'}/> 
            </div>
            <div className='portfolios'>
                <Categories/>
                <MenuItems/>
            </div>
        </div>
        
    )
}

export default Portfolio;
