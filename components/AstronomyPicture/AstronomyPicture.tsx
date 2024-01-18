import React, {useState, useEffect, lazy, Suspense} from 'react';
import axios from 'axios';
import {format, isValid} from 'date-fns';
import SingleImage from '../common/SingleImage/SingleImage';
import styles from './AstronomyPicture.module.css';

const LazyDateRangePicker = lazy(() => import('../common/DateRangePicker/DateRangePicker'));

export interface PictureData {
    title: string;
    url: string;
    explanation: string;
    date: Date;
}

const AstronomyPicture: React.FC = () => {
    const [pictureDataList, setPictureDataList] = useState<PictureData[]>([]);
    const [selectedStartDate, setSelectedStartDate] = useState(new Date());
    const [selectedEndDate, setSelectedEndDate] = useState(new Date());
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const fetchDataForDateRange = async () => {
            const formattedStartDate = format(selectedStartDate, 'yyyy-MM-dd');

            if (!isValid(selectedEndDate || selectedEndDate === null)) {
                console.error('Invalid selectedEndDate:', selectedEndDate);
                return;
            }

            const formattedEndDate = format(selectedEndDate, 'yyyy-MM-dd');
            const apiKey = '1IuZnGgDrmbejBFV0AjtvUxvXIsrJ7Ise9ol3ygd';

            try {
                const response = await axios.get<PictureData[]>(
                    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${formattedStartDate}&end_date=${formattedEndDate}`
                );
                console.log(response.data)
                setPictureDataList(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setPictureDataList([]);
            }
        };

        fetchDataForDateRange();
    }, [selectedStartDate, selectedEndDate]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className={`${styles.container} ${styles[theme]}`}>
            <h1 className={styles.title}>Astronomy Pictures</h1>
            <div className={styles.toggleContainer}>
                <div className={styles.toggleSwitch} onClick={toggleTheme}></div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyDateRangePicker
                    startDate={selectedStartDate}
                    endDate={selectedEndDate}
                    onDateChange={(start, end) => {
                        setSelectedStartDate(start);
                        setSelectedEndDate(end);
                    }}
                />
            </Suspense>
            {pictureDataList.length > 0 ? (
                pictureDataList.map((pictureData, index) => (
                    <SingleImage key={index} pictureData={pictureData} darkTheme={theme}/>
                ))
            ) : (
                <div className={styles.noImageContainer}>
                    <h2 className={styles.noImageText}>No pictures available for the selected date range</h2>
                </div>
            )}
        </div>
    );
};

export default AstronomyPicture;
