import React from 'react';
import ImageComponent from "./ImageComponent";
import MenuComponent from './menuComponent';
// функціогальний елемент helloworld

const HelloWorld = () => {
    return (
        <div>
            < MenuComponent />
            <h1>Hello World!</h1>
            <ImageComponent />
        </div>
    );
};

export default HelloWorld;