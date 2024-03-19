import React from 'react';
import MyComponent from '../components/ImageComponent';
import MenuComponent from '../components/menuComponent';

const Images = () => {
    return (
        <div>
            <MenuComponent />
            <h1>Сторінка для зображень</h1><hr />
            <MyComponent />
        </div>
        
    )
}

export default Images;