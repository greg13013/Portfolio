import React from "react";

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
        <img
          src={imageProfil}
          alt=""
          className="circle responsive-img"
        ></img>
      </div>
      <div className="col s12 m8">
        <div>
          <h4>A propos de moi</h4>
          {description}
        </div>
        <h4>Coordonées</h4>
        <div>{ville}</div>
        <div>{tel}</div>
        <div>{email}</div>
      </div>
    </section>
  );
};
