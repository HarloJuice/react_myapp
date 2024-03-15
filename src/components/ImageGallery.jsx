import React from 'react';
import { GalleryContainer, StyledImage } from '../styles/GalleryStyle';

const ImageGallery = () => {
  // Масив об'єктів зображень, які ви хочете відобразити
  const images = [
    { src: require('../images/image1.jpg'), alt: 'Dog 1' },
    { src: require('../images/image2.jpg'), alt: 'Dog 2' },
    { src: require('../images/image3.jpg'), alt: 'Dog 3' },
  ];

  return (
    <GalleryContainer>
      {images.map((image, index) => (
        <StyledImage key={index} src={image.src} alt={image.alt} />
      ))}
    </GalleryContainer>
  );
};

export default ImageGallery;
