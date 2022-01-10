import React from 'react'
import { ModalProjet } from './ModalProjet';
import { Button } from 'react-materialize';
import { Fade } from 'react-reveal';

export const Projet = ({ data }) => {

    const trigger = <Button>Voir en détail</Button>;

    if (data) {
        // console.log(data);

        function afficherLogo(projet) {
            let logo = []
            projet.competence.split(',').forEach(element => {
                                
                if (element === 'Angular') {
                    
                    logo.push(<i key={element} className="fab fa-angular textBlack"></i>)
                }
                if (element === 'Javascript') {
                    
                    logo.push(<i key={element} className="fab fa-js textBlack"></i>)
                }
                if (element === 'HTML') {
                    
                    logo.push(<i key={element} className="fab fa-html5 textBlack"></i>)
                }
                if (element === 'CSS') {
                    
                    logo.push(<i key={element} className="fab fa-css3-alt textBlack"></i>)
                }
                if (element === 'SASS') {
                    
                    logo.push(<i key={element} className="fab fa-sass textBlack"></i>)
                }
            });
            return logo
        }
        
        var afficherProjet = data.projets.map((projet, index) => {

            // console.log(projet.competence.split(','));

            

            return (
                <Fade left key={projet.titre}>
                <div  className="col s12 m4">
                    <div className="card large hoverable">
                        <div className="card-image">
                            <img src={projet.image} alt='exemple' />
                            <span className="card-title customTitleCard">{projet.titre}</span>
                        </div>
                        <div className="card-content">
                       <span className='logoProjet'>
                            {afficherLogo(projet)}
                            </span>
                            <p>
                                {projet.competence}
                            </p>
                            <p className='formatageTexte textBlack weight700'>
                                {projet.courteDescription}
                            </p>
                        </div>
                        <div className="card-action">
                            <a target='_blank' rel='noreferrer' href={projet.url}>Lien vers le site</a>

                            <ModalProjet data={projet} index={index} trigger={trigger} logo={afficherLogo(projet)} />
                        </div>

                    </div>
                </div>
                </Fade>
            );
        })
    }

    return (
        <section id="projet">
            <div className="row">
                {afficherProjet}
            </div>
        </section>
    )
}
