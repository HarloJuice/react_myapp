import React, { useState, useEffect } from 'react';
import '../styles/MyImageComponent.css'; // Підключаємо файли стилів

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../public/images', false, /\.(png|jpe?g|svg)$/));

const MyComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxHeight, setMaxHeight] = useState(null);

  const openModal = (index) => {
    setSelectedImage(images[Object.keys(images)[index]]);
    setCurrentIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % Object.keys(images).length;
    setSelectedImage(images[Object.keys(images)[nextIndex]]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + Object.keys(images).length) % Object.keys(images).length;
    setSelectedImage(images[Object.keys(images)[prevIndex]]);
    setCurrentIndex(prevIndex);
  };

  const handleClickOutside = (event) => {
    if (event.target.classList.contains('modal')) {
      closeModal();
    }
  };

  useEffect(() => {
    const calculateMaxHeight = () => {
      const windowHeight = window.innerHeight;
      const imageHeight = windowHeight * 0.8; // Встановлюємо максимальну висоту на 80% від висоти вікна
      setMaxHeight(imageHeight);
    };

    window.addEventListener('resize', calculateMaxHeight);
    calculateMaxHeight(); // Обчислюємо початкову максимальну висоту

    return () => {
      window.removeEventListener('resize', calculateMaxHeight);
    };
  }, []);

  useEffect(() => {
    if (showModal) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showModal]);

  return (
    <div className="image-gallery">
      {Object.keys(images).map((imageName, index) => (
        <div key={index} className="image-container" onClick={() => openModal(index)}>
          <img src={images[imageName]} alt={imageName} className="image" height={25} />
          <span className="image-caption">{imageName}</span>
        </div>
      ))}

      {showModal && (
        <div className="modal">
          <div className="modal-content" style={{ maxHeight: `${maxHeight}px` }}>
            <span className="close" onClick={closeModal}>&times;</span>
            <button className="prev" onClick={prevImage}>&#10094;</button>
            <img src={selectedImage} alt="Selected" className="modal-image" height={25} />
            <button className="next" onClick={nextImage}>&#10095;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
