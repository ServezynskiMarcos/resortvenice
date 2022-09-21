import { makeStyles } from "@material-ui/core";
import React from "react";
import { Carousel } from "react-bootstrap";
import { CarouselImage } from "./CarouselImage";
const Banner = () => {
  const classes = useStyle();
  return (
    <Carousel>
      {CarouselImage.map((e, i) => {
        return (
          <Carousel.Item interval={2000} key={i}>
            <img className={classes.img} src={e.image} alt={i} />
            <Carousel.Caption>
              <h3 className={classes.tittle}>{e.tittle}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {},
  img: {
    width: "100vw",
    maxHeight: "75vh",
    objectFit: "cover",
    display: "block",
  },
  tittle: {
    fontFamily: "Dancing Script, cursive",
    fontWeight: "bold",
    color: "#fff",
    textShadow: "0 0 10px black",
    fontSize: "8rem",
  },
}));
export default Banner;
