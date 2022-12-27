import { useHeader } from '../../data/Header'
import cn from 'classnames'
import PopupMenu from '@components/header/popup-menu'
import BurgerButton from '@ui/burger-button'
import { useSticky, useOffcanvas } from '@hooks'
import Nav from './Nav'

import {} from 'react-icons/fi'
import ContatoModal from '../modal/contato'
import { useState } from 'react'

export default function Header({ show, setShow }) {
  const { data, isLoading } = useHeader()
  const sticky = useSticky()
  const { offcanvas, offcanvasHandler } = useOffcanvas()

  return (
    <>
      {!isLoading ? (
        <>
          <header className={cn('rn-header haeder-default black-logo-version header--fixed header--sticky', sticky && 'sticky')}>
            <div className="header-wrapper rn-popup-mobile-menu m--0 row align-items-center">
              <div className="col-lg-2 col-6">
                <div className="header-left">
                  <div className="logo">
                    <a href="/">
                      <img src={data.logos[0].url} alt="logo" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-10 col-6">
                <div className="header-center">
                  <nav id="sideNav" className="mainmenu-nav navbar-example2 d-none d-xl-block">
                    <Nav menus={data.headers} setShow={setShow} />
                  </nav>
                  <div className="button-group header-right">
                    <a className="rn-btn border-button btn-small" target="_blank" href="#">
                      <span>Login Wallet</span>
                    </a>

                    <BurgerButton onClick={offcanvasHandler} />
                  </div>
                </div>
              </div>
            </div>
          </header>
          <PopupMenu isOpen={offcanvas} onClick={offcanvasHandler} setShow={setShow} menus={data.headers} logo={data.logos[1].url} />
          <ContatoModal show={show} setShow={setShow} title="Contate Me" content="" />
        </>
      ) : (
        <div className="w-100 h-100 position-absolute d-flex">
          <a className="mx-auto my-auto position-relative mt-2" href="/">
            <img src="./imgs/JM.svg" width={150} />
          </a>
        </div>
      )}
    </>
  )
}
