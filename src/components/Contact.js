import React, { useRef } from "react";
import { Button } from "react-materialize";

export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  };


  return (
    <section id="contact">
      <div className="row form">
        <form ref={form} onSubmit={sendEmail} className="col s12">

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

          <div className="input-field col s12">
          <i className="fas fa-comment-alt prefix"></i>
            <textarea id="message" className="materialize-textarea"></textarea>
            <label htmlFor="message">Message</label>
          </div>

          <Button className="col s4">Envoyer</Button>
        </form>
      </div>
    </section>
  );
};
