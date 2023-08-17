import React from "react";
import { days, formatMins } from "../../utils/dateUtils.js";

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
          <div
            className={`calendar__day-label day-label ${
              isCurrentDay ? "current-day" : ""
            }`}
          >
            <span className="day-label__day-name">
              {days[dayDate.getDay()]}
            </span>
            <span className="day-label__day-number">{dayDate.getDate()}</span>
          </div>
        );
      })}
    </header>
  );
};

export default Navigation;
