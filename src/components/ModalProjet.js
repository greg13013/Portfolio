import React from 'react'
import { Modal } from 'react-materialize'

export const ModalProjet = ({ data, index, trigger }) => {

    return (
        <Modal header={data.titre} trigger={trigger}>
            <img className='responsive-img' src={data.image}/>
        {data.description}
      </Modal>
    )
}
