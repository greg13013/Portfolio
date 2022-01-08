import React from "react";

export const Competence = ({ data }) => {

  if (data){
    console.log(data);
    var competences = data.competence;
    var experiencePro = data.experienceProfessionelle;
    var formations = data.formation;
  

  var afficherFormation =  formations.map(formation => {
      return (
        <div key={formation.ecole} >
          <h4>{formation.ecole}</h4>
          <p className="info">{formation.diplome}</p>
          <p className="info">{formation.titre}</p>
          <p className="">
            {formation.description}
          </p>
        </div>
      );
    })

    var afficherExperiencePro =  experiencePro.map(exp => {
      return (
        <div key={exp.nom} >
          <h4>{exp.nom}</h4>
          <p className="info">{exp.date}</p>
          <p className="">
            {exp.description}
          </p>
        </div>
      );
    })

  var afficherCompetences =  competences.map(competence => {
      return (
        <div key={competence.nom} >
          <h4>{competence.nom}</h4>
        </div>
      );
    })
  
}

  return (
    <section id="competence" className="section paddingBottom0">
      <div className="row">
        <div className="col s12 m5 xl3 offset-xl1 flexJustifyEnd mobileCenter">
          <h4>
            <span className="titreCompetence">Formation</span>
          </h4>
        </div>
        <div className="col s12 m5 xl5 offset-xl1">

        {afficherFormation}
        </div>
      </div>
      <div className="">
        <div className="col s12 m8 divider"></div>
      </div>
      <div className="row">
        <div className="col s12 m5 xl3 offset-xl1 flexJustifyEnd mobileCenter">
          <h4>
            <span className="titreCompetence">Expérience professionnelle</span>
          </h4>
        </div>
        <div className="col s12 m5 xl5 offset-xl1">

        {afficherExperiencePro}
        </div>
      </div>
      <div className="">
        <div className="col s12 m8 divider"></div>
      </div>
      <div className="row">
        <div className="col s12 m5 xl3 offset-xl1 flexJustifyEnd mobileCenter">
          <h4>
            <span className="titreCompetence">Compétences</span>
          </h4>
        </div>
        <div className="col s12 m5 xl5 offset-xl1">
          {afficherCompetences}
        </div>
      </div>
      <div className="">
        <div className="col s12 m8 divider"></div>
      </div>
    </section>
  );
};
