import React from "react";
import { Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

// Importing images
import image1 from "../img/SP1.webp";
import image2 from "../img/SP7.png";
import image3 from "../img/SP9.png";

const TakeMe = () => {
    const images = [image1, image2, image3]; // Array of imported images
  
    return (
      <Box sx={{ width: 400, height: 500, overflow: "hidden", margin: "auto" }}>
        {/* <Typography variant="h4" sx={{ textAlign: "center", mb: 2 }}>
          Take Me Component
        </Typography> */}
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
          emulateTouch
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "50%",
                  height: "50%",
                //   objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
          ))}
        </Carousel>
      </Box>
    );
  };

export default TakeMe;
