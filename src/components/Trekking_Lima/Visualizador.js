import React, { useState } from 'react';
import './ImageViewer.css';
import imagen1 from '../Trekking_Lima/img/Lvis1.jpg';
import imagen2 from '../Trekking_Lima/img/Lvis2.jpg';
import imagen3 from '../Trekking_Lima/img/Lvis3.jpg';
import imagen4 from '../Trekking_Lima/img/Lvis4.png';


function Visualizador() {
  const images = [
    {
      src: imagen2,
      alt: 'Laguna de Churup',
    },
    {
      src: imagen1,
      alt: 'Laguna de Churup',
    },
    {
      src: imagen3,
      alt: 'Laguna de Churup',
    },
    {
      src: imagen4,
      alt: 'Laguna de Churup',
    },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="image-viewer">
      <div className="main-image">
        <img src={selectedImage.src} alt={selectedImage.alt} />
      </div>
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`thumbnail ${
              selectedImage.src === image.src ? 'active' : ''
            }`}
            onClick={() => handleThumbnailClick(image)}
          />
        ))}
      </div>
    </div>
  );
}

export default Visualizador;
