import { useState } from 'react';
import '../styles/Page01_SunnySparky.css';

export const Page01_SunnySparky = () => {
  const [showSparky, setShowSparky] = useState(false);

  const handleSunnyClick = () => {
    setShowSparky(true);
  };

  return (
    <div className="scene-container">
      <div
        className="background"
        style={{ backgroundImage: 'url(/assets/BG_SpaceGradient.png)' }}
      />

      <div className="sunny-character" onClick={handleSunnyClick}>
        <div className="sunny-body">
          <div className="sunny-face">
            <div className="sunny-eye left"></div>
            <div className="sunny-eye right"></div>
            <div className="sunny-smile"></div>
          </div>
        </div>

        <div className="solar-ropes">
          <div className="rope rope-1"></div>
          <div className="rope rope-2"></div>
          <div className="rope rope-3"></div>
          <div className="rope rope-4"></div>
        </div>
      </div>

      {showSparky && (
        <div className="sparky-prefab">
          <div className="sparky-glow"></div>
          <div className="sparky-core"></div>
        </div>
      )}

      <div className="narration">
        <p>"Sunny, the cheerful Sun, loves to stretch its long, glowing ropes—like giant golden spaghetti in space!"</p>
      </div>
    </div>
  );
};
