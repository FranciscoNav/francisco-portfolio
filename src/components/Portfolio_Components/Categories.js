import React from 'react';
import {NavLink} from 'react-router-dom';

function Categories({filterFunc, categories}) {
    
    return (
        <div className='cat-buttons'>
            {
                categories.map((cat, i)=>{
                    return <button key={i}  type='button' className="cat-button" onClick={() => filterFunc(cat)}>{cat}</button>
                })
            }
        </div>
    )
}

export default Categories;
