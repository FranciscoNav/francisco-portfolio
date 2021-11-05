import React from 'react';
import {NavLink} from 'react-router-dom';

function Categories({filterFunc, categories}) {
    
    return (
        <div>
            {
                categories.map((cat, i)=>{
                    return <button key={i} onClick={() => filterFunc(cat)}>{cat}</button>
                    // return <NavLink key={i} onClick={() => filterFunc(cat)}>{cat}</NavLink>
                })
            }
        </div>
    )
}

export default Categories;
