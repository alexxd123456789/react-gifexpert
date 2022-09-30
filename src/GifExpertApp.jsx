import { useState } from 'react'
import { AddCategory, GifGrid } from './components'



export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['']);
    
    const onAddCategory = (cat) => {

        if(categories.includes(cat)) {
            console.warn('Ya existe esa categoria');
            return;
        }
        
        
        setCategories([cat, ...categories ]);
    }



    return (
        <>

            <h1>GifExpertApp</h1>

            <AddCategory 
            onAddCategory={onAddCategory} 
            />
    
            {
            categories.map( category => (
                <GifGrid 
                category={category} 
                key={category} 
                />
                )
                
            )}

        </>
    )
}
