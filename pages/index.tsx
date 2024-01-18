// pages/index.tsx
import React from 'react';
import AstronomyPicture from '../components/AstronomyPicture/AstronomyPicture';

import styles from "./index.module.css";
import Head from "next/head";


const Home: React.FC = () => {
    return (
        <>
            <Head>
                {/* Добавьте стили для body */}
                <style>
                    {`
            body {
              margin: 0;
            }
            h1 {
                margin-top: 0;
            }
          `}
                </style>
            </Head>
            <div className={styles.body}>
                <AstronomyPicture />
            </div>
        </>
    );
};

export default Home;
