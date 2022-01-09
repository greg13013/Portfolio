import React from 'react'
import { ModalProjet } from './ModalProjet';
import { Button } from 'react-materialize';

export const Projet = ({ data }) => {

    const trigger = <Button>Voir en détail</Button>;

    if (data) {
        console.log(data);

        function afficherLogo(projet) {
            projet.competence.split(',').forEach(element => {
                                
                if (element === 'Angular') {
                    console.log('ok');
                    
                    return (<i class="fab fa-angular"></i>)
                }
            })
        }
        
        var afficherProjet = data.projets.map((projet, index) => {

            console.log(projet.competence.split(','));

            

            return (
                <div key={projet.titre} className="col s12 m4">
                    <div className="card medium hoverable">
                        <div className="card-image">
                            <img src={projet.image} alt='exemple' />
                            <span className="card-title customTitleCard">{projet.titre}</span>
                        </div>
                        <div className="card-content">
                        {/* <i className="fab fa-angular"></i> */}
                        <p>
                            {afficherLogo(projet)}
                        </p>
                            <p>
                                {projet.competence}
                            </p>
                            <p className='formatageTexte'>
                                {projet.courteDescription}
                            </p>
                        </div>
                        <div className="card-action">
                            <a target='_blank' rel='noreferrer' href={projet.url}>Lien vers le site</a>

                            <ModalProjet data={projet} index={index} trigger={trigger} />
                        </div>

                    </div>
                </div>
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
