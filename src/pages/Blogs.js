import React from 'react';
import BlogsInfo from '../components/BlogsInfo';
import Title from '../components/Title';

function Blogs() {
    return (
        <div id="blogs">
            <div className='blog-title'>
                <Title title={'Blogs'} span={'Blogs'}/>
            </div>
            <div className='BlogsPage'>
                {
                    BlogsInfo.map(b => {
                        return <div className='blog' key={b.id}>
                            <div className='blog-content'>
                                <img src={b.image} alt=''/>
                                <a href={b.link} className='blog-link' target="_blank" rel="nooperner noreferrer">
                                    {b.title}
                                </a>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Blogs;

