import React, { useState } from 'react';
import './H_Gallery.css';
import galleryData from '../../utils/gallery.json';

const H_Gallery = () => {
  const [totalItems] = useState(galleryData.length);
  const [itemsToShow, setItemsToShow] = useState(6);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + 6);
  };

  const handleLoadLess = () => {
    setItemsToShow(6);
  };

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className='gallery-flexColCenter'>
      <h2>TAKE IN THE VIEW</h2>
      <p>Explore our beautiful community below.</p>
      <div className="gallery-grid">
        {galleryData.slice(0, itemsToShow).map((item, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(item.image)}>
            <img src={item.image} alt={item.type} />
          </div>
        ))}
      </div>
      {itemsToShow < totalItems ? (
        <>
          <button className="" onClick={handleLoadMore} style={{ marginTop: "20px" }}>
            Load More
          </button>
          {itemsToShow > 6 && (
            <button className="button" onClick={handleLoadLess} style={{ marginTop: "10px" }}>
              Load Less
            </button>
          )}
        </>
      ) : (
        itemsToShow > 6 && (
          <button className="button" onClick={handleLoadLess} style={{ marginTop: "20px" }}>
            Load Less
          </button>
        )
      )}

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={currentImage} alt="Enlarged view" />
        </div>
      )}
    </div>
  );
};

export default H_Gallery;
