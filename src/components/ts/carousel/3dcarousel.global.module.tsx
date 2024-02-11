import React from 'react';

import '../../scss/components/carousel.global.scss';

interface Carousel3DProps {
    images: string[];
    // type: string;
    // numimgshown: number;
}

const Carousel3D: React.FC<Carousel3DProps> = ({images }): React.JSX.Element => {
    const [currentImage, setCurrentImage]: [number, React.Dispatch<React.SetStateAction<number>>] = React.useState<number>(0);
    // const [numberImgShown, setNumberImgShown]: [number, React.Dispatch<React.SetStateAction<number>>] = React.useState<number>(numimgshown);
    const [imagesList, setImagesList]: [string[], React.Dispatch<React.SetStateAction<string[]>>] = React.useState<string[]>(images);
    // const [carouselType, setCarouselType]: [string, React.Dispatch<React.SetStateAction<string>>] = React.useState<string>(type);

    const handleLeftClick = (): void => {
        setCurrentImage(currentImage - 1);
    };

    const handleRightClick = (): void => {
        setCurrentImage(currentImage + 1);
    };

    const handleImageClick = (index: number): void => {
        setCurrentImage(index);
    };

    React.useEffect((): void => {
        // setCarouselType(type);
        setImagesList(images);
        // setNumberImgShown(numimgshown);

        // if (Math.ceil(images.length / 2) < numimgshown) {
        //     setNumberImgShown(Math.floor(images.length / 2));
        // }
    }, [images]);

    return (
        <div id="Carousel">
            <div id="Carousel3D">
                <div id="Carousel3DLeft" onClick={handleLeftClick} />
                <ul id="CarouselImageChooser">
                    {imagesList.map((image: string, index: number) => (
                        <li key={image} className={index === currentImage ? "selected" : ""} onClick={() => handleImageClick(index)} />
                    ))}
                </ul>
                <div id="Carousel3DRight" onClick={handleRightClick} />

                <div id="Carousel3DImages">
                    {imagesList.map((image: string, index: number) => (
                        <div key={image} className={index === currentImage ? "selected" : ""} style={{ backgroundImage: `url(${image})` }} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel3D;