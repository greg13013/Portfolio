import React from 'react'

export const Projet = () => {


    function agrandirCard(e){
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
    }}

    return (
        <section id="projet">
            <div className="row">
                <div id='cardy' className="col s12 m3">
                    <div className="card">
                        <div className="card-image">
                            <img src="img/7065648.png" alt='exemple' />
                            <span className="card-title">Card Title</span>
                        </div>
                        <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
                            <button className="btn waves-effect waves-light" onClick={(e) => agrandirCard(e)}>Voir en détail</button>
                        </div>
                    </div>
                </div>
                <div className="col s12 m3">
                    <div className="card">
                        <div className="card-image">
                            <img src="img/7065648.png" alt='exemple' />
                            <span className="card-title">Card Title</span>
                        </div>
                        <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
                            <button className="btn waves-effect waves-light" onClick={(e) => agrandirCard(e)}>Voir en détail</button>
                        </div>
                    </div>
                </div>
                <div className="col s12 m3">
                    <div className="card">
                        <div className="card-image">
                            <img src="img/7065648.png" alt='exemple' />
                            <span className="card-title">Card Title</span>
                        </div>
                        <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
                            <button className="btn waves-effect waves-light" onClick={(e) => agrandirCard(e)}>Voir en détail</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
