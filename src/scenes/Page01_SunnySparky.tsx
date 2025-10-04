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
        <img
          src="/assets/Sunny_body.png"
          alt="Sunny the Sun"
          className="sunny-body-image"
        />
        <img
          src="/assets/Sunny_ropes.png"
          alt="Sunny's glowing ropes"
          className="sunny-ropes-image"
        />
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


export { Page01_SunnySparky }