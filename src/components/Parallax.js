import React from "react";

export const Parallax = ({cheminImage}) => {
  return (
      <div className="parallax-container">
        <div className="parallax">
          <img src={cheminImage} alt="parallax" />
        </div>
      </div>
  );
};
