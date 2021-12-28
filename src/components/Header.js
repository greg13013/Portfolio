import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

export const Header = ({ data }) => {
  const [tailleEcran, setTailleEcran] = useState(window.innerHeight);
  const hauteurEcran = window.innerHeight;

  console.log(data);

  if (data) {
    var nom = data.nom;
    var statut = data.statut;
    var sociaux = data.social.map((social, index) => {
      return (
        <a target='_blank' key={index} href={social.url}>
          <i className={social.className}></i>
        </a>)
    });
  }

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

    window.addEventListener("scroll", () => {
      if (
        window.scrollY > hauteurEcran * 0.2 &&
        window.scrollY < hauteurEcran &&
        getSize().width > 768
      ) {
        document.querySelector("nav").classList.add("fadeIn");
      } else {
        document.querySelector("nav").classList.remove("fadeIn");
        if (window.scrollY < hauteurEcran * 0.2) {
          document.querySelector("nav").classList.remove("opaque");
        } else {
          document.querySelector("nav").classList.add("opaque");
        }
      }
    });

    console.log(hauteurEcran);

    setTailleEcran(getSize().height);
  }, [hauteurEcran]);

  return (
    <div>
      <header id="header" style={styles.hauteurImg}>
        <nav>
          <Link
            className="navLink"
            activeClass="active"
            to="description"
            spy={true}
            smooth={true}
            duration={500}
            
          >
            Description
          </Link>
          <Link
            className="navLink"
            activeClass="active"
            to="competence"
            spy={true}
            smooth={true}
            duration={500}
          >
            Competence
          </Link>
          <Link
            className="navLink"
            activeClass="active"
            to="projet"
            spy={true}
            smooth={true}
            duration={500}
          >
            Projets
          </Link>
          <Link
            className="navLink"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </nav>
        <div className="row banniere">
          <h1 className="textBanniere">

            {nom}</h1>
          <h4>
            {statut}
            <Typewriter options={{
              strings: ['Angular', 'React'],
              autoStart: true,
              loop: true,
            }}
            /></h4>
          <p>{sociaux}</p>
        </div>
      </header>
    </div>
  );
};
