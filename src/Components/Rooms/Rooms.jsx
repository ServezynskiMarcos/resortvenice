import React from "react";
import { Carousel } from "react-bootstrap";
import { RoomsData } from "./RoomsData";
import s from "./Rooms.module.css";
import {MdPeopleAlt, MdKingBed, MdBathtub} from "react-icons/md"
const Rooms = () => {
  return (
    <div className={s.container}>
    <h1>Charming European-Style Art Deco</h1>
      <div className={s.card}>
        <Carousel className={s.carousel} fade variant="dark">
          {RoomsData[0].map((e, j) => {
            return (
              <Carousel.Item key={j} interval={5000}>
                <img
                  src={e.image}
                  alt={"hola"}
                  style={{ width: "100%", height: "50vh" }}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
        {RoomsData[0].map((c,i) => {
          return c.tittle && c.description !== null ? (
            <div className={s.info} key={i}>
              <h2><a href="/rooms">{c.tittle}</a></h2>
              <div className={s.icons}>
              <MdPeopleAlt/>2 sleeps
              <MdKingBed/>1 Queen bed
              <MdBathtub/>1 Bathroom
              </div>
              <hr/>
              <p>{c.description}</p>
            </div>
          ) : null;
        })}
      </div>
      <div className={s.card}>
        <Carousel className={s.carousel} fade variant="dark">
          {RoomsData[1].map((e, j) => {
            return (
              <Carousel.Item key={j} interval={5000} >
                <img
                  src={e.image}
                  alt={"hola"}
                  style={{ width: "100%", height: "50vh" }}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
        {RoomsData[1].map((c, i) => {
          return c.tittle && c.description !== null ? (
            <div className={s.info} key={i}>
              <h2><a href="/rooms">{c.tittle}</a></h2>
              <div className={s.icons}>
              <MdPeopleAlt/>2 sleeps
              <MdKingBed/>1 King bed
              <MdBathtub/>1 Bathroom
              </div>
              <hr/>
              <p>{c.description}</p>
            </div>
          ) : null;
        })}
      </div>
      <div className={s.card}>
        <Carousel className={s.carousel} fade variant="dark">
          {RoomsData[2].map((e, j) => {
            return (
              <Carousel.Item key={j} interval={5000}>
                <img
                  src={e.image}
                  alt={"hola"}
                  style={{ width: "100%", height: "50vh" }}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
        {RoomsData[2].map((c,i) => {
          return c.tittle && c.description !== null ? (
            <div className={s.info} key={i}>
              <h2><a href="/rooms">{c.tittle}</a></h2>
              <div className={s.icons}>
              <MdPeopleAlt/>2 sleeps
              <MdKingBed/>1 King bed
              <MdBathtub/>1 Bathroom
              </div>
              <hr/>
              <p>{c.description}</p>
            </div>
          ) : null;
        })}
      </div>
      <div className={s.card}>
        <Carousel className={s.carousel} fade variant="dark">
          {RoomsData[3].map((e, j) => {
            return (
              <Carousel.Item key={j} interval={5000}>
                <img
                  src={e.image}
                  alt={"hola"}
                  style={{ width: "100%", height: "50vh" }}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
        {RoomsData[3].map((c,i) => {
          return c.tittle && c.description !== null ? (
            <div className={s.info} key={i}>
              <h2><a href="/rooms">{c.tittle}</a></h2>
              <div className={s.icons}>
              <MdPeopleAlt/>2 sleeps
              <MdKingBed/>1 King bed
              <MdBathtub/>1 Bathroom
              </div>
              <hr/>
              <p>{c.description}</p>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Rooms;
