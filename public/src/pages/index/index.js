import React, { useState } from 'react';
import styles from './index.module.css';

export default function Index(props)
{
    return (
        <div className={`${styles.index} fl`}>
            <div className={styles.test}>
                test
            </div>

            <div className={styles.aaa}>
                aaa
            </div>
        </div>
    );
}
