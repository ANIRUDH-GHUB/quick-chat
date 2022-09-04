import React, { useState } from "react";
import "./ToggleButton.scss";

const ToggleButton: React.FC<{ callback: () => void }> = ({ callback }) => {
  const [toggle, setToggle] = useState(true);

  const triggerToggle = () => {
    setToggle(!toggle);
    callback();
  };

  return (
    <div
      onClick={triggerToggle}
      className={`wrg-toggle ${toggle ? "wrg-toggle--checked" : ""}`}
    >
      <div className="wrg-toggle">
        <div className="wrg-toggle-container"></div>
        <div className="wrg-toggle-circle"></div>
        <input
          className="wrg-toggle-input"
          type="checkbox"
          aria-label="Toggle Button"
        />
      </div>
    </div>
  );
};

export default ToggleButton;
