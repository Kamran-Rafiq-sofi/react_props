import React from 'react';
import ListItem from './ListItem';
const List =(props)=> {
    
    
        const{data}=props;
        return(
        <div>    

{data.map((product)=>{
        return(
        <ListItem
        product={product}
        key={product.id}
        />
        )
    })}
</div>
            
        )
    }

export default List;
