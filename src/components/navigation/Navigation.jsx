import React from "react";
import { days } from "../../utils/dateUtils.js";

const Navigation = ({ weekDates }) => {
  const currentDate = new Date();

  return (
    <header className="calendar__header">
      {weekDates.map((dayDate) => {
        const isCurrentDay =
          dayDate.getDate() === currentDate.getDate() &&
          dayDate.getMonth() === currentDate.getMonth() &&
          dayDate.getFullYear() === currentDate.getFullYear();

        return (
          <div className={`calendar__day-label day-label`}>
            <span
              className={`day-label__day-name ${
                isCurrentDay ? "current-day-text" : ""
              }`}
            >
              {days[dayDate.getDay()]}
            </span>
            <span
              className={`day-label__day-number ${
                isCurrentDay ? "current-day" : ""
              }`}
            >
              {dayDate.getDate()}
            </span>
          </div>
        );
      })}
    </header>
  );
};

export default Navigation;
