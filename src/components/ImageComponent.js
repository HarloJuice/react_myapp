// Ваш файл компонента
import React from 'react';
import '../styles/MyImageComponent.css'
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../public/images', false, /\.(png|jpe?g|svg)$/));

const MyImageComponent = () => {
  return (
    <div className="image-gallery">
      {Object.keys(images).map((imageName, index) => (
        <div key={index} className="image-container">
          <img src={images[imageName]} alt={imageName} className="image" />
          <span className="image-caption">{imageName}</span>
        </div>
      ))}
    </div>
  );
};

export default MyImageComponent;
