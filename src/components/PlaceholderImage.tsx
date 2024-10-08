import { useState } from 'react';

import placeholderImage from '/projects/placeholder.svg';


type PlaceholderImageProps = {
    src: string
    alt: string
    styles: string
    onClickCallback?: () => void
}

const PlaceholderImage = ({ src, alt, styles, onClickCallback }: PlaceholderImageProps) => {
    const [loaded, setLoaded] = useState(false);
    const [lastSrc, setLastSrc] = useState(src);

    if (lastSrc !== src) {
        setLoaded(false);
        setLastSrc(src);
    }

    const handleOnLoad = () => {
        setLoaded(true);
    }

    return (
        <img src={loaded ? src : placeholderImage} alt={alt} className={styles} onClick={onClickCallback} onLoad={handleOnLoad} />
    )
}

export default PlaceholderImage