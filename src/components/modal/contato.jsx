import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { X } from 'react-feather'
import ContactForm from '../contact-form'

const ContatoModal = ({ show, setShow, title, content }) => {
  return (
    <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
      <Modal.Header>
        <Modal.Title id="example-custom-modal-styling-title" className="sr-only">
          {title}
        </Modal.Title>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setShow(false)}>
          <span aria-hidden="true">
            <X />
          </span>
        </button>
      </Modal.Header>
      <Modal.Body>
        <div className="news-details">
          <h2 className="title">{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <ContactForm setShow={setShow} />
      </Modal.Body>
    </Modal>
  )
}

export default ContatoModal
