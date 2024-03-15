import React from 'react';
import styled from 'styled-components';

// Стилізований контейнер для галереї
export const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin: 20px;
`;

// Стилізоване зображення
export const StyledImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Компонент ImageGallery зі стилями
const images = [
  { src: require('../images/image1.jpg'), alt: 'Dog 1' },
  { src: require('../images/image2.jpg'), alt: 'Dog 2' },
  { src: require('../images/image3.jpg'), alt: 'Dog 3' },];
const ImageGalleryStyle = ({ images }) => {
  return (
    <GalleryContainer>
      {images.map((image, index) => (
        <StyledImage key={index} src={image.src} alt={image.alt} />
      ))}
    </GalleryContainer>
  );
};

export default ImageGalleryStyle;
