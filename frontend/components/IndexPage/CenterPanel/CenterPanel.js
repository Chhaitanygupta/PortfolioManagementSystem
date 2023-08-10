import Image from 'next/image'
import styles from './CenterPanel.module.css'
import React from 'react'

function CenterPanel() {
    return (
        <div className={`${styles.containerMain}`}>
            <div className={`${styles.imageContainer}`}>
                <Image
                    src="/HomePageImage.jpeg"
                    height={500}
                    width={500}
                    alt="Investment Growth Image"
                    className={`${styles.image}`}
                />
            </div>
            <div className={`${styles.contentContainer}`}>
                <div className={`${styles.text}`}>
                    <div className={`${styles.textHeading}`}>
                        Grow Your Money with<br/>
                        <span>Portfolio <strong>Management.</strong></span>
                    </div>
                    <div className={`${styles.textContent}`}>
                    Invest Wisely,Invest Now.<br/>
                    Take your first step towards investing with us
                    </div>
                </div>
                <div className={`${styles.buttonContainer}`}>
                    <a href='/risk-sustainability' className={`${styles.NavLink}`}>
                        Select a sustainablitiy strategy
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CenterPanel