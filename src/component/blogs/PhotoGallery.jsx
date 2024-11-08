import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PhotoGallery() {
  const mygallery = [
    {
      title: "Attend to Help Shelter Those at Risk from Natural Disasters",
      img1: "https://res.cloudinary.com/dmpsrcunj/image/upload/v1729104456/441730989_1147947946250684_1325109803432780731_n_epfjvx.jpg",
      img2: "https://res.cloudinary.com/dmpsrcunj/image/upload/v1729104448/438112400_1943332619460984_6494619318824702061_n_zzolxf.jpg",
      img3: "https://res.cloudinary.com/dmpsrcunj/image/upload/v1729104447/438051521_307109095783772_8882492923099938260_n_rchlxg.jpg",
      img4: "https://res.cloudinary.com/dmpsrcunj/image/upload/v1729104410/441885556_437139525838213_6617694397324795328_n_tigtmn.jpg"
    }
  ]
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openImageViewer = (index, imgs) => {
    setCurrentImageIndex(index);
    setImages(imgs);
    setIsOpen(true);
  };

  const closeImageViewer = () => {
    setIsOpen(false);
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col gap-1 pb-3">
      <h3 className='text-text_color_light py-2 text-center text-3xl'>Gallery</h3>
      <AnimatePresence>
        {mygallery.map((item, index) => (
          <motion.div
            key={index}
            className="bg-bg_primary p-4 rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            <h2 className="text-lg font-semibold text-text_color_light mb-2">{item.title}</h2>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 overflow-x-auto">
              {item.img1 && (
                <img
                  src={item.img1}
                  alt={`${item.title} Image 1`}
                  className="h-auto rounded-md object-cover cursor-pointer"
                  onClick={() => openImageViewer(0, [item.img1, item.img2, item.img3, item.img4].filter(Boolean))}
                />
              )}
              {item.img2 && (
                <img
                  src={item.img2}
                  alt={`${item.title} Image 2`}
                  className="h-auto rounded-md object-cover cursor-pointer"
                  onClick={() => openImageViewer(1, [item.img1, item.img2, item.img3, item.img4].filter(Boolean))}
                />
              )}
              {item.img3 && (
                <img
                  src={item.img3}
                  alt={`${item.title} Image 3`}
                  className="h-auto rounded-md object-cover cursor-pointer"
                  onClick={() => openImageViewer(2, [item.img1, item.img2, item.img3, item.img4].filter(Boolean))}
                />
              )}
              {item.img4 && (
                <img
                  src={item.img4}
                  alt={`${item.title} Image 4`}
                  className="h-auto rounded-md object-cover cursor-pointer"
                  onClick={() => openImageViewer(3, [item.img1, item.img2, item.img3, item.img4].filter(Boolean))}
                />
              )}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <button className="absolute top-5 right-5 text-white text-2xl" onClick={closeImageViewer}>
            &times;
          </button>
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-h-full max-w-full rounded-lg"
          />
          <button className="absolute left-5 text-white text-2xl" onClick={showPrevImage}>
            &#10094;
          </button>
          <button className="absolute right-5 text-white text-2xl" onClick={showNextImage}>
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}
