import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const HomeSectionCarosal = ({Data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = Data.slice(0, 15).map((item, index) => (
    <HomeSectionCard key={index+ item.title }product={item} />
  ));

  // Dynamically calculate visible items count
  const visibleItems = Math.floor(responsive[1024].items);
  const maxIndex = items.length - visibleItems;

  const slideNext = () => {
    if (activeIndex < maxIndex) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const slidePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const syncActiveIndex = ({ item }) => {
    setActiveIndex(item);
  };

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
           key={activeIndex}
          mouseTracking
          disableDotsControls
         disableButtonsControls
         responsive={responsive}
          items={items}
      activeIndex={activeIndex}          
      onSlideChanged={syncActiveIndex}


        />

        {/* NEXT Button */}
        {activeIndex < maxIndex && (
          <Button
            variant="contained"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "-2rem",
              transform: "translateY(-50%)",
              bgcolor: "white",
              minWidth: "2rem",
              p: 0,
              zIndex: 10,
            }}
          >
            <KeyboardArrowRightIcon sx={{ color: "black" }} />
          </Button>
        )}

        {/* PREVIOUS Button */}
        {activeIndex > 0 && (
          <Button
            variant="contained"
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "-2rem",
              transform: "translateY(-50%)",
              bgcolor: "white",
              minWidth: "2rem",
              p: 0,
              zIndex: 10,
            }}
          >
            <KeyboardArrowLeftIcon sx={{ color: "black" }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarosal;
