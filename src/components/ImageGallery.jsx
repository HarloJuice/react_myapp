import React from 'react';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';

const ImageGalery = () => {
    return (
        <div className="image-galery">
            <img src={image1} alt="image1"/>
            <img src={image2} alt="image2"/>
            <img src={image3} alt="image3"/>
        </div>
    );
}