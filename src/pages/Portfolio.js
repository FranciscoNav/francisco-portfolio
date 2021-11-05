import React from 'react';
import Categories from '../components/Portfolio_Components/Categories';
import Title from '../components/Title'
import MenuItems from '../components/Portfolio_Components/MenuItems';
import PortfolioData from '../components/Portfolio_Components/PortfolioData';
import { useState } from 'react';

const allCategories = ['All', ...new Set(PortfolioData.map(item => item.category))];


function Portfolio() {
    const [categories, setcategories]= useState(allCategories);
    const [menuItems, setmenuItems]= useState(PortfolioData);

    const filterFunc = (searchCategory) =>{
        const filterData = PortfolioData.filter((item) =>{
            return item.category === searchCategory;
        })
        setmenuItems(filterData);
    }

    return (
        <div className="PortfolioPage">
            <div>
                <Title title={'Portfolio'} span={'Portfolio'}/> 
            </div>
            <div className='portfolios-data'>
                <Categories filterFunc={filterFunc} categories={categories}/>
                <MenuItems menuItems={menuItems}/>
            </div>
        </div>
        
    )
}

export default Portfolio;
