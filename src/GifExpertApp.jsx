import React, { useState } from 'react'

import { AddCategory ,GifGrid } from './components'


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (NewCategory) => {

        console.log(NewCategory)
        //categories.push('Valorant')
        //console.log("Ingrese")
        //setCategories( [...categories,'Valorant'])
        //setCategories(cat => [...cat , 'Valorant' ])
        if (categories.includes(NewCategory)) return;

        setCategories([NewCategory, ...categories])
    }

    return (
        <>      
            <h1> GifExpertApp</h1>  
            <AddCategory
    
                onNewCategory={event => onAddCategory(event)}
            />    
                
                {
                    categories.map(category => ( 
                    <GifGrid  key={category} category={category}/> ))
                }
           
            {/* gifItem */}
        </>
    )
}
