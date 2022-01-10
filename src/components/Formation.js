import React from 'react'
import { Roll } from 'react-reveal';

export const Formation = ({data}) => {

    if (data) {

        
          var experiencePro = data.experienceProfessionelle;
    var formations = data.formation;


    var afficherFormation = formations.map(formation => {
      return (
        <Roll left key={formation.ecole}>
        <div  >
          <h4>{formation.ecole}</h4>
          <p className="info">{formation.diplome}</p>
          <p className="info">{formation.titre}</p>
          <p className="">
            {formation.description}
          </p>
        </div>
        </Roll>
      );
    })

    var afficherExperiencePro = experiencePro.map(exp => {
      return (
        <Roll right key={exp.nom}>
        <div  >
          <h4>{exp.nom}</h4>
          <p className="info">{exp.date}</p>
          <p className="">
            {exp.description}
          </p>
        </div>
        </Roll>
      );
    })
      
    }
    return (
        <section id="formation" className="section paddingBottom0">
        <div className="row">
          <div className="col s12 m5 xl3 offset-xl1 flexJustifyEnd mobileCenter">
            <h4>
              <span className="titreCompetence">Formation</span>
            </h4>
          </div>
          <div className="col s12 m5 xl7 offset-xl1 formatageTexte">

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
          <div className="col s12 m5 xl7 offset-xl1 formatageTexte">

            {afficherExperiencePro}
          </div>
        </div>
      

      <div className="">
        <div className="col s12 m8 divider"></div>
      </div>
      </section>
    )
}
