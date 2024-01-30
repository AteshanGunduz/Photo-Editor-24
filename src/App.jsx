import { useState } from "react";
import "./styles.css";
export default function App() {
  const [filter, setFilter] = useState({
    brightness: 1,
    contrast: 1,
    saturation: 1
  });

  const handleChange = (e, filterType) => {
    setFilter((prev) => ({
      ...prev,
      [filterType]: parseFloat(e.target.value)
    }));
  };

const { brightness, contrast, saturation } = filter;


  return (
    <div className="main-container">
      <h1>
        <span>📷</span> Photo Editörü <span>📷</span>
      </h1>

      <div className="image-container">
        <img src="./images/kunal-goswami-CuUn__aMGD4-unsplash.jpg"  style={{
            filter: `brightness(${brightness}) contrast(${contrast}) saturate(${saturation})`
          }}/>
      </div>

      <form>
        <label>
          <input type="range" name="brightness" min={0} max={2} step={0.1} onChange={(e) => handleChange(e, "brightness")} />
          <span>Brightness</span>
        </label>

        <label>
          <input type="range" name="contrast" min={0} max={2} step={0.1} onChange={(e) => handleChange(e, "contrast")} />
          <span>Contrast</span>
        </label>

        <label>
          <input type="range" name="saturation" min={0} max={2} step={0.1} onChange={(e) => handleChange(e, "saturation")} />
          <span>Saturation</span>
        </label>
      </form>
    </div>
  );
}
