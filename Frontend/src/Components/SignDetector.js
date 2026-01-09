import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

function SignDetector() {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [prediction, setPrediction] = useState("");

  const capture = () => {
    const image = webcamRef.current.getScreenshot();
    setImageSrc(image);
  };

  const sendToBackend = async () => {
    if (!imageSrc) return alert("Capture an image first!");

    const response = await fetch("http://localhost:5000/api/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: imageSrc }),
    });

    const data = await response.json();
    setPrediction(data.sign);
  };

  return (
    <section className="detector">
      <h2>Sign Language Detection</h2>

      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={640}
        height={480}
      />

      <div className="buttons">
        <button onClick={capture}>📸 Capture</button>
        <button onClick={sendToBackend}>🔍 Detect Sign</button>
      </div>

      {imageSrc && (
        <div className="preview">
          <h3>Captured Image:</h3>
          <img src={imageSrc} alt="Captured" width="320" />
        </div>
      )}

      {prediction && (
        <div className="result">
          <h2>Detected Sign: {prediction}</h2>
        </div>
      )}
    </section>
  );
}

export default SignDetector;
