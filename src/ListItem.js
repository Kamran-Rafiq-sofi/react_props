

import React from 'react';
const ListItem =(props)=> {

    
        // const{data}=this.state;
        // const{name, icon, link,bgColor}=this.state;
        const { name, icon, link, bgColor } = props.product;

        return (
            <div className='listItem' 
                 style={{ backgroundColor: bgColor }}>


                <img 
                    src={icon} 
                    alt={name} 
                    style={styles.image} 
                />
                <a 
                   href={link} 
                   style={styles.link}>{name}
                </a>
            </div>
        )
    }

const styles = {
    image: {

        borderRadius: '40%',
        maxWidth: 40,
        maxHeight: 50
    },
    link: {
        paddingTop: 10,
        paddingLeft: 10,
        textDecoration:'none',
        color:'black',
    }
}
export default ListItem;