/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../../scss/components/pagetitle.global.scss';

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
    const [positions, setPositions] = React.useState({
        backgroundPositionY: -backgroundVhPreDown / backgroundVhDownRate,
        titlePositionY: -titleVhPreDown / titleVhDownRate,
    });

    React.useEffect(() => {
        const handleScroll = (): void => {
            const scrollY: number = window.scrollY;
            setPositions({
                backgroundPositionY: -((backgroundVhPreDown + scrollY) / backgroundVhDownRate),
                titlePositionY: scrollY / titleVhDownRate,
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const { backgroundPositionY, titlePositionY }: { backgroundPositionY: number; titlePositionY: number } = positions;

    return (
        <div
            id="Title"
            style={{
                backgroundPositionY: `${backgroundPositionY}vh`,
                backgroundImage: `url(images/${backgroundLink})`,
            }}
        >
            <div id="TitleBackground" />
            
            {oxfLogo && (
                <img id="OxfLogo" src="images/OxfordLogo.png" style={{ transform: `translateY(${titlePositionY}vh)` }} />
            )}
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