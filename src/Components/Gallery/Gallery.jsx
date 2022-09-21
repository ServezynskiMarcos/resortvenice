import { Box, ImageList, ImageListItem } from "@material-ui/core";
import { React, useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import s from "./Gallery.module.css";
import { GalleryData } from "./GalleryData.jsx";

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((i) => {
    setCurrentImage(i);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  const images = GalleryData.map((e) => e.img);
  return (
    <div className={s.container}>
      <div className={s.info}>
        <h1>Our story in pictures</h1>
      </div>
      <Box sx={{ width: "80%", height: "auto", padding: "10px" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {GalleryData.map((e, i) => (
            <ImageListItem key={i} className={s.imgs}>
              <img
                src={`${e.img}?w=248&fit=crop&auto=format`}
                srcSet={`${e.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={e.title}
                loading="lazy"
                onClick={() => openImageViewer(i)}
                style={{cursor: "pointer"}}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={true}
          backgroundStyle={{
            backgroundColor: "#856f3b81",
            backdropFilter:' blur(5px)',
            marginTop:'5%',
            height: '100%',

          }}
          closeOnClickOutside={true}
          
        />
      )}
    </div>
  );
}
