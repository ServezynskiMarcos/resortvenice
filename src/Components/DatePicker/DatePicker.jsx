import React, { useState } from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import s from "./DatePicker.module.css";
const DatePicker = () => {
  const [showDates, setShowDates] = useState(false);

  const handleShow = () => {
    setShowDates(!showDates);
  };
  return (
    <div className={s.dates}>
      {showDates ? (
        <DateRangePicker
          block
          character=" to "
          format="dd-MM-yy"
          placement="top"
          className={s.data}
        />
      ) : null}
      <button onClick={handleShow} className={s.show}>
        Check-In
      </button>
    </div>
  );
};
export default DatePicker;
