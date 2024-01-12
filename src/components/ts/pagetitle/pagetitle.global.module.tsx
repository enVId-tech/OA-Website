/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import '../../scss/components/pagetitle.global.scss';

// Define the props interface outside the component
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
    const [backgroundPositionY, setBackgroundPositionY] = React.useState<number>(-backgroundVhPreDown / backgroundVhDownRate);
    const [titlePositionY, setTitlePositionY] = React.useState<number>(-titleVhPreDown / titleVhDownRate);

    React.useEffect(() => {
        const handleScroll = (): void => {
            const scrollY: number = window.scrollY;
            const newBackgroundPositionY: number =
                -((backgroundVhPreDown + scrollY) / backgroundVhDownRate);
            setBackgroundPositionY(newBackgroundPositionY);

            const newTitlePositionY: number = scrollY / titleVhDownRate;
            setTitlePositionY(newTitlePositionY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div
            id="Title"
            style={{
                backgroundPositionY: `${backgroundPositionY}vh`,
                backgroundImage: `background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(images/${backgroundLink})`,
            }}>
            {oxfLogo && (
                <img
                    id="OxfLogo"
                    src="images/OxfordLogo.png"
                    style={{ transform: `translateY(${titlePositionY}vh)` }}
                />
            )}
            <div id="MainText">
                <h1
                    id="OxfAcaMain"
                    style={{ transform: `translateY(${titlePositionY}vh)` }}
                    className={`${oxfLogo ? 'oxf-aca-main' : 'n-oxf-aca-main'}`}>
                    {mainText}
                </h1>
                <h5
                    id="OxfAcaSub"
                    style={{ transform: `translateY(${titlePositionY}vh)` }}
                    className={`${oxfLogo ? 'oxf-aca-sub' : 'n-oxf-aca-sub'}`}>
                    {subText}
                </h5>
            </div>
        </div>
    );
};

export default PageTitle;
