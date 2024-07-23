import { format } from "date-fns";
import { useState } from "react";
import { Calendar } from "react-date-range";

interface IProps {
  date: Date | number;
  className: string;
  setDate: (arg: Date) => void;
  setOpened: (arg: boolean) => void;
}

const UICalendar = ({ date, className, setDate, setOpened }: IProps) => {
  const [localDate, setLocalDate] = useState(date);

  const handleChange = (item: Date) => {
    let string = format(item, "dd MMM yyyy");
    setLocalDate(new Date(string));
  };

  const closeHandle = () => {
    setOpened(false);
  };

  const continueHandle = () => {
    setDate(new Date(localDate));
    setOpened(false);
  };

  return (
    <div className={`${className} dateRange`}>
      <Calendar
        date={new Date(localDate)}
        onChange={handleChange}
        showPreview={false}
        showDateDisplay={false}
        showMonthAndYearPickers={false}
        editableDateInputs={false}
        rangeColors={["rgba(0, 160, 104, 1)"]}
        dateDisplayFormat={"dd MMM yyyy"}
      />

      <span className="dateRange__text">
        {String(format(localDate, "dd MMM yyyy"))}
      </span>

      <div className="dateRange__controls">
        <span
          className="dateRange__icon svgCloseDarkIcon"
          onClick={closeHandle}
        ></span>
        <span className="linkBack" onClick={continueHandle}>
          Continue
        </span>
      </div>
    </div>
  );
};

export default UICalendar;
