// components/common/SingleImage.tsx
import React from 'react';
import styles from './SingleImage.module.css';

interface SingleImageProps {
    pictureData: {
        title: string;
        url: string;
        explanation: string;
    };
}

const SingleImage: React.FC<SingleImageProps> = ({pictureData}) => {
    return (
        <div className={styles.imageContainer}>
            <img src={pictureData.url} alt={pictureData.title} className={styles.image}/>
            <h2 className={styles.title}>{pictureData.title}</h2>
            <p className={styles.explanation}>{pictureData.explanation}</p>
        </div>
    );
};

export default SingleImage;
