import React from "react";
import { Roll } from "react-reveal";

export const Competence = ({ data }) => {

  if (data) {
    console.log(data);
    
    var competences = data.competence;

        var afficherCompetences = competences.map(competence => {
            return (
              <Roll left key={competence.nom}>
              <div  >
                <h4>{competence.nom}</h4>
              </div>
              </Roll>
            );
          })

   
  }

  return (
    <section id="competence" className="section paddingBottom0">
      
        <div className="row">
          <div className="col s12 mobileCenter">
            <h4 className="texteFond">
              Compétences
            </h4>
          </div>
          <div className="col s12 formatageTexte">
            {afficherCompetences}
          </div>
        </div>

    </section>
  );
};
