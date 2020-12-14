import React from 'react';
import ContentLoader from "react-content-loader";

const LoadingBlock = () => {
    return (
        <ContentLoader
            className='pizza-block'
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="131" cy="127" r="119" />
            <rect x="0" y="259" rx="6" ry="6" width="255" height="26" />
            <rect x="0" y="460" rx="6" ry="6" width="280" height="84" />
            <rect x="0" y="300" rx="6" ry="6" width="255" height="84" />
            <rect x="0" y="407" rx="6" ry="6" width="80" height="31" />
            <rect x="128" y="397" rx="25" ry="25" width="128" height="51" />
        </ContentLoader>
    )
};

export default LoadingBlock;