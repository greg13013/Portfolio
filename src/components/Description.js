import React from "react";
import { Flip, Roll } from "react-reveal";

export const Description = ({data}) => {

if (data) {
    var description = data.bio;
    var imageProfil = data.image;
    var ville = data.adresse.ville;
    var tel = data.tel;
    var email = data.email;
}

  return (
    <section id="description" className="row">
      <div className="col s12 m4 flexJustifyCenter">
        <Flip left>

        <img
          src={imageProfil}
          alt=""
          className="circle responsive-img"
        ></img>
        </Flip>
      </div>
      <div className="col s12 m8">

      <Roll right>
        <div>
          <h4>A propos de moi</h4>
          <p className="formatageTexte">
            {description}
            </p>
        </div>
      </Roll>

      <Roll left>
        <h4>Coordonées</h4>
        <div>{ville}</div>
        <div>{tel}</div>
        <div>{email}</div>
      </Roll>

      </div>
    </section>
  );
};
