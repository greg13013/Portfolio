import React from 'react'
import { ModalProjet } from './ModalProjet';


export const Projet = ({ data }) => {

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
                                {projet.description}
                            </p>
                        </div>
                        <div className="card-action">
                            <a target='_blank' href={projet.url}>Lien vers le site</a>
                            <a className="waves-effect waves-light btn modal-trigger" href={'#modal'+index}>modal</a>
                            <button className="btn waves-effect waves-light" onClick={(e) => agrandirCard(e)}>Voir en détail</button>
                        </div>
                        <ModalProjet data={projet} index={index} />
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

    function openModal(){

    }

    return (
        <section id="projet">
            <div className="row">
               {afficherProjet}
               <a className="waves-effect waves-light btn modal-trigger" href='#modal10'>Lien vers le site</a>
               <div id="modal10" className="modal">
            <div className="modal-content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
        </div>
            </div>
        </section>
    )
}
