import React from 'react'

export const ModalProjet = ({ data, index }) => {
    return (
        <div id={'modal'+index} className="modal" style={{zIndex: 1003, display: 'none', opacity: 0, top: '4%', transform: 'scaleX(0.8) scaleY(0.8)'}}>
            <div className="modal-content">
                <h4>{data.titre}</h4>
                <p>{data.description}</p>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">OK</a>
            </div>
        </div>
    )
}
