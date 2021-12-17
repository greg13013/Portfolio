import React, { useEffect, useState } from "react";

export const Header = () => {
  const [tailleEcran, setTailleEcran] = useState(window.innerHeight);
  const hauteurEcran = window.innerHeight;

  const styles = {
    hauteurImg: {
      height: tailleEcran,
    },
  };

  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      setTailleEcran(getSize().height);
    });

    console.log(hauteurEcran);

    setTailleEcran(getSize().height);
  }, [hauteurEcran]);

  return (
    <div>
      <header style={styles.hauteurImg}>
          <nav>
              <a href="#description">
              Description
                </a>
          </nav>
        <div className="row banniere">
          <h1 className="textBanniere">Colli Grégory</h1>
          <h4>
              Développeur front-end
          </h4>
        </div>
      </header>
    </div>
  );
};
