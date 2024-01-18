import React from 'react';
import {format} from 'date-fns';
import styles from './SingleImage.module.css';
import {PictureData} from '../../AstronomyPicture/AstronomyPicture';

interface SingleImageProps {
    pictureData: PictureData;
}

const SingleImage: React.FC<SingleImageProps> = ({pictureData}) => {
    const dateObject = new Date(pictureData.date);

    return (
        <div className={styles.singleImageContainer}>
            <img className={styles.image} src={pictureData.url} alt={pictureData.title}/>
            <div className={styles.imageInfo}>
                <h2 className={styles.imageTitle}>{pictureData.title}</h2>
                <p className={styles.imageDate}>{format(dateObject, 'MMMM d, yyyy')}</p>
                <p className={styles.imageExplanation}>{pictureData.explanation}</p>
            </div>
        </div>
    );
};

export default SingleImage;
