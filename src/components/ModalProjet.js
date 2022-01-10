import React from 'react'
import { Modal } from 'react-materialize'

export const ModalProjet = ({ data, trigger, logo }) => {

    return (
        <Modal header={data.titre} trigger={trigger}>
            <img className='responsive-img' src={data.image} alt={data.titre}/>
            {logo}
        <p className='formatageTexte textBlack weight700'>
           {data.description}
           </p>
      </Modal>
    )
}
