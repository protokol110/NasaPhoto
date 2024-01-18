// components/AstronomyPicture.tsx
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DateRangePicker from '../common/DateRangePicker/DateRangePicker';
import SingleImage from '../common/SingleImage/SingleImage';
import {format} from 'date-fns';
import styles from './AstronomyPicture.module.css';

interface PictureData {
    title: string;
    url: string;
    explanation: string;
}

const AstronomyPicture: React.FC = () => {
    const [pictureData, setPictureData] = useState<PictureData | null>(null);
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        const fetchDataForDate = async () => {
            const formattedDate = format(selectedDate, 'yyyy-MM-dd');
            const apiKey = '1IuZnGgDrmbejBFV0AjtvUxvXIsrJ7Ise9ol3ygd';

            try {
                const response = await axios.get<PictureData>(
                    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${formattedDate}`
                );
                setPictureData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setPictureData(null);
            }
        };

        fetchDataForDate();
    }, [selectedDate]);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Astronomy Picture of the Day</h1>
            <DateRangePicker
                selectedDate={selectedDate}
                onDateChange={(date) => setSelectedDate(date)}
            />
            {pictureData ? (
                <SingleImage pictureData={pictureData}/>
            ) : null}
        </div>
    );
};

export default AstronomyPicture;
