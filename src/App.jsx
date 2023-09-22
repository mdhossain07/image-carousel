import { useState } from "react";
import "./App.css";

function App() {
  const imgStyle = {
    width: "500px",
    height: "500px",
  };

  const btnStyle = {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  };
  const pictures = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  ];
  const [image, setImage] = useState(0);

  const handleNextImage = () => {
    if (image === pictures.length - 1) {
      setImage(pictures.length - 2);
    }
    setImage((img) => img + 1);
  };

  const handlePrevImage = () => {
    if (image === 0) {
      setImage(1);
    }
    setImage((img) => img - 1);
  };

  return (
    <>
      <h1>Image Carousel</h1>

      <div>
        <img style={imgStyle} src={pictures[image]} alt="" />
      </div>

      <div style={btnStyle}>
        <button onClick={handlePrevImage}>Previous</button>
        <button onClick={handleNextImage}>Next</button>
      </div>
    </>
  );
}

export default App;
