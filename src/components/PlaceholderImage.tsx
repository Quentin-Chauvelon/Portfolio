import { useState } from 'react';

import placeholderImage from '/projects/placeholder.svg';

import "/src/assets/styles/project.css"


type PlaceholderImageProps = {
    src: string
    srcTmp?: string,
    displaySpinner?: boolean
    alt: string
    styles: string
    onClickCallback?: () => void
}

const PlaceholderImage = ({ src, srcTmp, displaySpinner = true, alt, styles, onClickCallback }: PlaceholderImageProps) => {
    const [tmpLoaded, setTmpLoaded] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [lastSrc, setLastSrc] = useState(src);

    if (lastSrc !== src) {
        setLoaded(false);
        setTmpLoaded(false);
        setLastSrc(src);
    }

    const handleOnLoad = () => {
        if (!tmpLoaded) {
            setTmpLoaded(true);
        } else {
            setLoaded(true);
        }
    }

    const imageSrc = tmpLoaded ? src : (srcTmp ? srcTmp : placeholderImage);

    console.log(tmpLoaded, loaded);


    return (
        <>
            <img src={imageSrc} alt={alt} className={styles} onClick={onClickCallback} onLoad={handleOnLoad} />
            {
                displaySpinner && !loaded && (
                    <div className="absolute flex justify-center items-center w-full h-full top-0 left-0">
                        <div className="loader w-9 h-9" />
                    </div>
                )
            }
        </>
    )
}

export default PlaceholderImage