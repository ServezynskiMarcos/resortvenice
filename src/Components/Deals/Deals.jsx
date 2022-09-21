import React from 'react'
import Offerts from '../Offerts/Offerts'
import s from './Deals.module.css'
const Deals = () => {
  return (
   
    <div className={s.container}>
    <Offerts/>
    <div className={s.containerCard}>
      <div className={s.card}>
        <h1>Early booking</h1>
        <h3>5%</h3>
        <p>Discount Book at least 3 days before arrival and prepay your booking (non-refundable)</p>
        <button>BOOK</button>
      </div>
      <div className={s.cardpro}>
        <h1>Long stay discount</h1>
        <h3>7%</h3>
        <p>+ 4 nights </p>
        <button>BOOK</button>
      </div>
      <div className={s.card}>
        <h1>Usual customers</h1>
        <h3>5%</h3>
        <p>Discount, To show our appreciation</p>
        <button>BOOK</button>
      </div>
      </div>
    </div>
    
  )
}

export default Deals