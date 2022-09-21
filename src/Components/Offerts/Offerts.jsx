import React, { useState } from "react";
import { AiFillDollarCircle, AiFillCar } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import Offcanvas from 'react-bootstrap/Offcanvas';
import s from "./Offerts.module.css";
const Offerts = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className={s.container}>
      <h3 onClick={handleShow} style={{cursor: 'pointer'}}>Book on our website and enjoy these advantages</h3>
      <div className={s.containerItems}>
        <div className={s.contentInfo}>
          <AiFillDollarCircle className={s.icons} />
          <p>THE BEST PRICE</p>
        </div>
        <div className={s.contentInfo}>
          <AiFillCar className={s.icons} />
          <p>PRIVATE PARKING</p>
        </div>
        <div className={s.contentInfo}>
          <FaCalendarAlt className={s.icons} />
          <p>NO OVERBOOKING</p>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose} style={{backgroundColor:'#856f3b', color: 'white', fontFamily: "Alice, serif", textAlign: 'center'}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Venice Resort</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{overflow: 'hidden'}}> 
          <h1>Advantages of booking with us</h1>
          <AiFillDollarCircle className={s.icons} />
          <p>THE BEST PRICE</p>
          <p>We assure you the best available price and the most attractive offers.</p>
          <AiFillCar className={s.icons} />
          <p>PRIVATE PARKING</p>
          <p> Facilities when reserving a space in our private car park, located next to the hotel.</p>
          <FaCalendarAlt className={s.icons} />
          <p>NO OVERBOOKING</p>
          <p>In no case will your reservation be diverted for reasons of overbooking. Fully guaranteed reservation.</p>
         
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Offerts;


