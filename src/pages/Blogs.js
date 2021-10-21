import React from 'react';
import BlogsInfo from '../components/BlogsInfo';


function Blogs() {
    return (
        <div className='BlogsPage'>
            {
                BlogsInfo.map(b => {
                    return <div className='blog' key={b.id}>
                        <div className='clog-content'>
                            <img src={b.image}/>
                            <a href={b.link} className='blog-link'>
                                {b.title}
                            </a>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Blogs;

