import React from 'react';

interface ImageListProps {
    pictureDataList: PictureData[];
}

interface PictureData {
    title: string;
    url: string;
    explanation: string;
}

const ImageList: React.FC<ImageListProps> = ({pictureDataList}) => {
    return (
        <div>
            {pictureDataList.map((pictureData, index) => (
                <div key={index}>
                    <h2>{pictureData.title}</h2>
                    <img src={pictureData.url} alt={pictureData.title} style={{maxWidth: '100%'}}/>
                    <p>{pictureData.explanation}</p>
                </div>
            ))}
        </div>
    );
};

export default ImageList;
