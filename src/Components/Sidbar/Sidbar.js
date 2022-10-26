import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidbar = () => {
    const [newsCategory,setNewsCategory] = useState([]);
    useEffect(()=>{
        fetch('https://assignment-10-server-rifat7432.vercel.app/courses')
        .then(res => res.json())
        .then(data => setNewsCategory(data))
    },[])
    
    return (
        <div>
            
            {
                newsCategory.map(category=><Link key={category.id} className='mb-3 d-block' to={`/courses/${category.id}`}>{category.name}</Link>)
            }
        </div>
    );
};

export default Sidbar;