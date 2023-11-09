import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import styled from '@emotion/styled';
export const LottieContainer = ({ path, width, height }) => {
    const lottieContainer = useRef(null);
    useEffect(() => {
        Lottie.loadAnimation({
            container: lottieContainer.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: path,
        });
        return () => Lottie.destroy();
    }, []);
    const Root = styled.div `
        width: ${width};
        height: ${height};
    `;
    return (<Root ref={lottieContainer}/>);
};
