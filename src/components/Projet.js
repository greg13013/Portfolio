import React from 'react'
import { ModalProjet } from './ModalProjet';
import { Button } from 'react-materialize';

export const Projet = ({ data }) => {

    const trigger = <Button>Voir en détail</Button>;

    if (data) {
        console.log(data);
        var afficherProjet = data.projets.map((projet, index) => {
            return (
                <div key={projet.titre} className="col s12 m3">
                    <div className="card hoverable">
                        <div className="card-image">
                            <img src={projet.image} alt='exemple' />
                            <span className="card-title">{projet.titre}</span>
                        </div>
                        <div className="card-content">
                            <p>
                                {projet.competence}
                            </p>
                            <p>
                                {projet.courteDescription}
                            </p>
                        </div>
                        <div className="card-action">
                            <a target='_blank' href={projet.url}>Lien vers le site</a>

                            <ModalProjet data={projet} index={index} trigger={trigger} />
                        </div>

                    </div>
                </div>
            );
        })
    }


    function agrandirCard(e) {
        // alert('yolo')
        let divParent = e.target.parentElement.parentElement.parentElement;
        console.log(e.target.parentElement.parentElement.parentElement);
        divParent.style.transition = '2s ease'

        if (divParent.classList.contains('m10')) {
            divParent.classList.remove('m10')
            divParent.classList.add('m3')
        } else {

            divParent.classList.remove('m3')
            divParent.classList.add('m10')
            // document.querySelector('#cardy').style.transform = 'scale(2)'
        }
    }

    return (
        <section id="projet">
            <div className="row">
                {afficherProjet}
            </div>
        </section>
    )
}
