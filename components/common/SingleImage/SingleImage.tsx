import React from 'react';
import {format} from 'date-fns';
import styles from './SingleImage.module.css';

interface SingleImageProps {
    pictureData: {
        title: string;
        url: string;
        explanation: string;
        date: Date;
    };
    darkTheme: 'light' | 'dark';
}

const SingleImage: React.FC<SingleImageProps> = ({pictureData, darkTheme}) => {
    return (
        <div className={`${styles.singleImageContainer} ${styles[darkTheme]}`}>
            <img className={styles.image} src={pictureData.url} alt={pictureData.title}/>
            <div className={styles.imageInfo}>
                <h2 className={styles.imageTitle}>{pictureData.title}</h2>
                <p className={`${styles.imageDate} ${styles[darkTheme]}`}>
                    {format(new Date(pictureData.date), 'MMMM d, yyyy')}
                </p>
                <p className={`${styles.imageExplanation} ${styles[darkTheme]}`}>{pictureData.explanation}</p>
            </div>
        </div>
    );
};

export default SingleImage;
