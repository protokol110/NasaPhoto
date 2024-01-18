// components/common/DateRangePicker.tsx
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DateRangePicker.module.css';

interface DateRangePickerProps {
    selectedDate: Date;
    onDateChange: (date: Date) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({selectedDate, onDateChange}) => {
    return (
        <div className={styles.datePickerContainer}>
            <DatePicker
                selected={selectedDate}
                onChange={(date: Date) => onDateChange(date as Date)}
                maxDate={new Date()}
                style={{width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd'}}
            />
        </div>
    );
};

export default DateRangePicker;
