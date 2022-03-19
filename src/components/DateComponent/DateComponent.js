import "./DateComponent.scss";
import React from "react";
import "Library/common/css/gridLayout.css";
import { PostItElement } from "Library/utilities/PostItElement.js";

function DateComponent() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();

  const dayToOrdinalNumber = (day) =>
    day === 1 || day === 21 || day === 31
      ? day + "st"
      : day === 2 || day === 22
      ? day + "nd"
      : day === 3 || day === 23
      ? day + "rd"
      : day + "th";

  const ordinalDay = dayToOrdinalNumber(day);
  const ordinalMonth = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][month];

  return (
    <PostItElement>
      <div className="DateComponent gridLayout--2">
        <h1 className="DateComponent__p">
          {ordinalMonth} {ordinalDay}
        </h1>
      </div>
    </PostItElement>
  );
}

export { DateComponent };
