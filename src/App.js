import React, { useRef, useEffect } from "react";

import Webcam from "react-webcam";

const App = () => {
  //reference to webcam and canvas
  const webcamRef = useRef(null);

  //function to check and initialize the webcam
  const checkIn = async () => {
    // Check video data is loading from webcam
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video; //check console to see webcamRef objects
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      console.log(video);
    }
  };

  useEffect(() => {
    checkIn();
    console.log(webcamRef);
  });

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
      </header>
    </div>
  );
};

export default App;
