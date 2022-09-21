import React from "react";
import s from "./DetailRoom.module.css";
import { IoBed, IoPeople } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { MdRoomService } from "react-icons/md";

import { Detail } from "./Detail";
const DetailRoom = () => {
  return (
    <div className={s.container}>
      {Detail[0]?.map((e) => {
        return (
          <div className={s.card}>
            <img src={e.image} alt="" />
            <div className={s.info1}>
              <h1>{e.tittle}</h1>
              <p>{e.description}</p>
              <div className={s.icons}>
                <div className={s.icon}>
                  <IoBed />
                  <p>180 X 190 cm</p> 
                </div>
                <div className={s.icon}>
                  <IoPeople />
                  <p>1 or 2 people</p> 
                </div>
                <div className={s.icon}>
                  <FaBath />
                  <p>private bathroom</p>
                </div>
                <div className={s.icon}>
                  <MdRoomService />
                  <p>room service</p>
                </div>
              </div>
              <h3>{e.price}</h3>
              <button>BOOK</button>
            </div>
          </div>
        );
      })}
      {Detail[1]?.map((e) => {
        return (
          <div className={s.card}>
            <img src={e.image} alt="" />
            <div className={s.info}>
              <h1>{e.tittle}</h1>
              <p>{e.description}</p>
              <div className={s.icons}>
                <div className={s.icon}>
                  <IoBed />
                  <p>160 X 190 cm</p> 
                </div>
                <div className={s.icon}>
                  <IoPeople />
                  <p>1 or 2 people</p> 
                </div>
                <div className={s.icon}>
                  <FaBath />
                  <p>private bathroom</p>
                </div>
                <div className={s.icon}>
                  <MdRoomService />
                  <p>room service</p>
                </div>
              </div>
              <h3>{e.price}</h3>
              <button>BOOK</button>
            </div>
          </div>
        );
      })}
      {Detail[2]?.map((e) => {
        return (
          <div className={s.card}>
            <img src={e.image} alt="" />
            <div className={s.info}>
              <h1>{e.tittle}</h1>
              <p>{e.description}</p>
              <div className={s.icons}>
                <div className={s.icon}>
                  <IoBed />
                  <p>160 X 190 cm</p> 
                </div>
                <div className={s.icon}>
                  <IoPeople />
                  <p>1 or 2 people</p> 
                </div>
                <div className={s.icon}>
                  <FaBath />
                  <p>private bathroom</p>
                </div>
                <div className={s.icon}>
                  <MdRoomService />
                  <p>room service</p>
                </div>
              </div>
              <h3>{e.price}</h3>
              <button>BOOK</button>
            </div>
          </div>
        );
      })}
      {Detail[3]?.map((e) => {
        return (
          <div className={s.card}>
            <img src={e.image} alt="" />
            <div className={s.info4}>
              <h1>{e.tittle}</h1>
              <p>{e.description}</p>
              <div className={s.icons}>
                <div className={s.icon}>
                  <IoBed />
                  <p>140 X 170 cm</p> 
                </div>
                <div className={s.icon}>
                  <IoPeople />
                  <p>1 people</p> 
                </div>
                <div className={s.icon}>
                  <FaBath />
                  <p>private bathroom</p>
                </div>
                <div className={s.icon}>
                  <MdRoomService />
                  <p>room service</p>
                </div>
              </div>
              <h3>{e.price}</h3>
              <button>BOOK</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DetailRoom;
