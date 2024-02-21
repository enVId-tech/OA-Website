/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../../scss/components/pagetitle.global.scss';
import globalType from '../device/device.template';

interface PageTitleProps {
    height: number;
    mainText: string;
    subText?: string;
    oxfLogo: boolean;
    backgroundLink: string;
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
    backgroundLink,
    percentageDown,
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
            id="Title"
            style={{
                backgroundPositionY: `${deviceType === "desktop" ? backgroundPositionY * 1.25 : backgroundPositionY * 2}vh`,
                backgroundImage: `url(images/${backgroundLink})`,
                marginTop: `${-12}vh`,
                height: `${deviceType === "desktop" ? height + 12 : (height * (3/4)) + 12}vh`,
            }}
        >
            <div
                id="TitleBackground"
                style={{
                    height: `${deviceType === "desktop" ? height + 12 : (height * (3/4)) + 12}vh`,
                }}
            />

            {oxfLogo ? (
                <img id="OxfLogo" src="images/OxfordLogo.png" style={{ transform: `translateY(${titlePositionY}vh)` }} />
            ) : <img id="OxfLogo" className={`${deviceType === "desktop" ? "isHidden" : ""}`} />}
            <div id="MainText">
                <h1
                    id="OxfAcaMain"
                    style={{ transform: `translateY(${titlePositionY}vh)` }}
                    className={`${oxfLogo ? 'oxf-aca-main' : 'n-oxf-aca-main'}`}
                >
                    {mainText}
                </h1>
                <h5
                    id="OxfAcaSub"
                    style={{ transform: `translateY(${titlePositionY}vh)` }}
                    className={`${oxfLogo ? 'oxf-aca-sub' : 'n-oxf-aca-sub'}`}
                >
                    {subText}
                </h5>
            </div>
        </div>
    );
};

export default PageTitle;