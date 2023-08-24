import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useFormik } from "formik";

type RangeType = {
  startDate: Date;
  endDate: Date;
  key: String;
};

type SelectionEvent = {
  selection: RangeType;
};

type DatepickerProps = {
  range: RangeType[];
  setRange: React.Dispatch<React.SetStateAction<RangeType[]>>;
};

const Datepicker = ({ range, setRange }: DatepickerProps): JSX.Element => {
  //hooks
  const [open, setOpen] = useState(false);
  const calendarRef = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);

    return () => {
      document.removeEventListener("keydown", hideOnEscape, true);
    };
  }, []);

  //FX to hide dropdown calendar
  const hideOnEscape = (e: KeyboardEvent) => {
    if (open && e.key === "Escape") {
      setOpen(false);
    }
  };

  // @ts-ignore
  const formik = useFormik({});

  // Date Range Picker Component

  let rangePicker = (
    // @ts-ignore
    <DateRange
      editableDateInputs={true}
      onChange={(item: SelectionEvent) => setRange([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={range}
      rangeColors={["#212529"]}
      minDate={new Date()}
      showDateDisplay={false}
      weekStartsOn={1}
      id='calendar'
      months={2}
      direction='horizontal'
      className='border-2 border-gray-300 rounded-md'
    />
  );

  return (
    <>
      <input
        className={`flex flex-row items-center text-sm mt-1 p-2 border-2  rounded-md cursor-pointer w-full active:border-secondary focus:border-secondary focus:ring-secondary ${
          open ? "border-secondary" : "border-gray-300"
        }`}
        id='calendar'
        readOnly
        onBlur={formik.handleBlur}
        onClick={() => setOpen(!open)}
        value={`${format(range[0].startDate, "dd/MM/yyyy")} - ${format(
          range[0].endDate,
          "dd/MM/yyyy"
        )}`}
      />
      {open && (
        <div className='w-1/2' ref={calendarRef}>
          {rangePicker}
        </div>
      )}
    </>
  );
};

export default Datepicker;
