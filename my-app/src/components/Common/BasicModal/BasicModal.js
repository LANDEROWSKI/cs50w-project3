import React from 'react'
import {Modal} from 'semantic-ui-react';
import './BasicModal.scss'

export  function BasicModal(props) {
    const{show, size, title, children, onClose} =props
  return (
    <Modal className='modal-basic' open={show} onClose={onClose}>
        {title && <Modal.Header>
           {title}
        </Modal.Header>}
        

        <Modal.Content>
            {children}
        </Modal.Content>
    </Modal>

  )
}

BasicModal.defaultProps = {
    size: "tiny"
}
