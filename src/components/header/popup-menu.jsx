import React from 'react'
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from '@ui/offcanvas'
import Nav from './Nav'
import { FaDiscord, FaLinkedin, FaGithub } from 'react-icons/fa'

const PopupMenu = ({ isOpen, onClick, menus, logo }) => {
  return (
    <Offcanvas isOpen={isOpen} onClick={onClick}>
      <OffcanvasHeader logo={logo} onClick={onClick} />
      <OffcanvasBody>
        {menus && <Nav menus={menus} />}

        <div className="social-share-style-1 mt--40">
          <span className="title">find with me</span>
          <ul className="social-share d-flex liststyle">
            <li className="facebook">
              <a href="#">
                <FaLinkedin size={24} />
              </a>
            </li>
            <li className="instagram">
              <a href="#">
                <FaGithub size={24} />
              </a>
            </li>
            <li className="linkedin">
              <a href="#">
                <FaDiscord size={24} />
              </a>
            </li>
          </ul>
        </div>
      </OffcanvasBody>
    </Offcanvas>
  )
}

export default PopupMenu
