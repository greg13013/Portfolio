import React from "react";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="row form">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s3">
              <input id="prenom" type="text" className="validate" />
              <label htmlFor="prenom">Prénom</label>
            </div>
            <div className="input-field col s3">
              <input id="nom" type="text" className="validate" />
              <label htmlFor="nom">Nom</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
