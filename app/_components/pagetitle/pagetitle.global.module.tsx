/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import styles from '@/styles/components/pagetitle.module.scss';
import globalType from '../device/device.template';
import OxfFrontImage from '@/public/images/OxfFrontImage.jpg';
import Image from "next/image";

interface PageTitleProps {
    height: number;
    mainText: string;
    subText?: string;
    oxfLogo: boolean;
    backgroundLink?: string;
    percentageDown: number;
    backgroundVhPreDown?: number;
    backgroundVhDownRate?: number;
    titleVhPreDown?: number;
    titleVhDownRate?: number;
}

const PageTitle: React.FC<PageTitleProps> = ({
                                                 height,
                                                 mainText,
                                                 subText,
                                                 oxfLogo,
                                                 backgroundLink = OxfFrontImage.src,
                                                 backgroundVhPreDown = 0,
                                                 backgroundVhDownRate = 128,
                                                 titleVhPreDown = 0,
                                                 titleVhDownRate = 30,
                                             }): React.JSX.Element => {
    const [deviceType, setDeviceType]: [string, React.Dispatch<React.SetStateAction<string>>] = React.useState<string>("");
    const [positions, setPositions]: [number[], React.Dispatch<React.SetStateAction<number[]>>] = React.useState<number[]>([
        -backgroundVhPreDown / backgroundVhDownRate,
        -titleVhPreDown / titleVhDownRate,
    ]);

    React.useEffect((): () => void => {
        const handleScroll = (): void => {
            const scrollY: number = window.scrollY;
            setPositions([
                -((backgroundVhPreDown + scrollY) / backgroundVhDownRate),
                scrollY / titleVhDownRate,
            ]);
        };
        window.addEventListener('scroll', handleScroll);

        setDevice();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const setDevice = (): void => {
        const device: string = globalType("device");
        setDeviceType(device);
    }

    const backgroundPositionY: number = positions[0];
    const titlePositionY: number = positions[1];

    return (
        <div
            className={styles.title}
            style={{
                backgroundPositionY: `${deviceType === "desktop" ? backgroundPositionY * 1.25 : backgroundPositionY * 2}vh`,
                backgroundImage: `url(images/${backgroundLink})`,
                marginTop: `${-12}vh`,
                height: `${deviceType === "desktop" ? height + 12 : (height * (3 / 4)) + 12}vh`,
            }}
        >
            <div
                className={styles.titleBackground}
                style={
                    {
                        height: `${deviceType === "desktop" ? height + 12 : (height * (3 / 4)) + 12}vh`,
                    }
                }
            />

            {
                oxfLogo ? (
                    <Image
                        alt={"Oxford Academy Logo"}
                        className={styles.oxfLogo}
                        src="images/OxfordLogo.png"
                        style={{
                            transform: `translateY(${titlePositionY}vh)`
                        }}
                    />
                ) : (
                    <Image
                        alt={"Oxford Academy Logo"}
                        src="images/OxfordLogo.png"
                        className={`${styles.oxfLogo} ${deviceType === "desktop" ? styles.isHidden : ""}`}
                    />
                )
            }

            <div className={styles.mainText}>
                <h1
                    className={`${styles.oxfAcaMain} ${oxfLogo ? styles.oxfAcaMain : styles.nOxfAcaMain}`}
                    style={{
                        transform: `translateY(${titlePositionY}vh)`
                    }}
                >
                    {mainText}
                </h1>
                <h5
                    className={`${styles.oxfAcaSub} ${oxfLogo ? styles.oxfAcaSub : styles.nOxfAcaSub}`}
                    style={{
                        transform: `translateY(${titlePositionY}vh)`
                    }}
                >
                    {subText}
                </h5>
            </div>
        </div>
    );
};

export default PageTitle;