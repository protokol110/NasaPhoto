// components/common/DateRangePicker.tsx
import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DateRangePicker.module.css';

interface DateRangePickerProps {
    startDate: Date;
    endDate: Date;
    onDateChange: (startDate: Date, endDate: Date) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({startDate, endDate, onDateChange}) => {
    const [selectedStartDate, setSelectedStartDate] = useState(startDate);
    const [selectedEndDate, setSelectedEndDate] = useState(endDate);

    const handleDateChange = (dates: [Date, Date] | null) => {
        if (dates) {
            const [start, end] = dates;
            setSelectedStartDate(start);
            setSelectedEndDate(end);
            onDateChange(start, end);
        }
    };

    return (
        <div className={styles.datePickerContainer}>
            <DatePicker
                selected={selectedStartDate}
                onChange={handleDateChange}
                startDate={selectedStartDate}
                endDate={selectedEndDate}
                selectsRange
                inline
                calendarClassName={styles.datePickerInput}
            />
        </div>
    );
};

export default DateRangePicker;
