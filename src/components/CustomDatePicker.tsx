import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { Fragment } from "react/jsx-runtime";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

interface CustomDatePickerProps {
  value: dayjs.Dayjs;
  setValue: (value: dayjs.Dayjs) => void;
}
const CustomDatePicker = ({ value, setValue }: CustomDatePickerProps) => {
  return (
    <Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={value}
          label="Date"
          disableFuture
          views={["month", "year"]}
          onChange={(newValue) => {
            setValue(newValue as dayjs.Dayjs);
          }}
        />
      </LocalizationProvider>
    </Fragment>
  );
};
export default CustomDatePicker;
