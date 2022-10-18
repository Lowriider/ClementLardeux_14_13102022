import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = ({startDate = null, onChange}) => {

    return (
        <DatePicker
            selected={startDate}
            onChange={onChange}
            inline
        />
    );
}

export default CustomDatePicker;
