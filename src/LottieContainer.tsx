import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import styled from '@emotion/styled';

type LottieContainerProps = {
    path: string;
    width?: string;
    height?: string;
};

export const LottieContainer = ({ path, width, height }: LottieContainerProps) => {
  const lottieContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
        Lottie.loadAnimation({
            container: lottieContainer.current as HTMLDivElement,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: path,
            });
            return () => Lottie.destroy();
    }, []);

    const Root = styled.div`
        width: ${width};
        height: ${height};
    `;

    return (
        <Root ref={lottieContainer} />
    );
};