import React from "react";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="row form">
        <form className="col s12">
          
            <div className="input-field col s12 m5">
            <i className="fas fa-user prefix"></i>
              <input id="prenom" type="text" className="validate" />
              <label htmlFor="prenom">Prénom</label>
            </div>
            <div className="input-field col s12 m5">
            <i className="fas fa-user prefix"></i>
              <input id="nom" type="text" className="validate" />
              <label htmlFor="nom">Nom</label>
            </div>
         
            <div className="input-field col s12 m5">
            <i className="fas fa-envelope prefix"></i>
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          
        </form>
      </div>
    </section>
  );
};
