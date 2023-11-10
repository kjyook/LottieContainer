# LottieContainer
React component for Lottie animations

## Install
```npm i lottiecontainer```

## Usage
```javascript
import React from 'react';
import LottieContainer from 'lottiecontainer';

const App = () => {
  return <LottieContainer path="your-animation-path.json" width="100%" height="100%" />;
};

export default App;
```
most of lottie files are json, so the ratio of width and height cannot be adjusted. At this time, the size of the lottie media is determined depending on the width value.

autoplay and loop options are true by default. I'll revise it soon so that it can be controlled.

## Type Props
path: string
width: string (default: 100%)
height: string (default: 100%)