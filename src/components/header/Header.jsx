import { useHeader } from '../../data/Header'
import cn from 'classnames'
import PopupMenu from '@components/header/popup-menu'
import BurgerButton from '@ui/burger-button'
import { useSticky, useOffcanvas } from '@hooks'
import Nav from './Nav'

import {} from 'react-icons/fi'
import { useState } from 'react'

export default function Header() {
  const { data, isLoading, error } = useHeader()
  const sticky = useSticky()
  const { offcanvas, offcanvasHandler } = useOffcanvas()

  // Se houver erro na consulta GraphQL ou dados não estiverem disponíveis, usa dados locais
  const fallbackData = {
    logos: [
      { id: 1, url: '/imgs/JM-logo.svg' },
      { id: 2, url: '/imgs/JM.svg' }
    ],
    headers: [
      { id: 1, link: '#home', text: 'Home' },
      { id: 2, link: '#about', text: 'Sobre' },
      { id: 3, link: '#skills', text: 'Skills' },
      { id: 4, link: '#experience', text: 'Experiência' }
    ]
  }

  const headerData = (data && data.logos && data.headers) ? data : fallbackData

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
                      <img src={headerData.logos[0].url} alt="logo" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-10 col-6">
                <div className="header-center">
                  <nav id="sideNav" className="mainmenu-nav navbar-example2 d-none d-xl-block">
                    <Nav menus={headerData.headers} />
                  </nav>
                  <div className="button-group header-right">
                    <BurgerButton onClick={offcanvasHandler} />
                  </div>
                </div>
              </div>
            </div>
          </header>
          <PopupMenu 
            isOpen={offcanvas} 
            onClick={offcanvasHandler} 
            menus={headerData.headers} 
            logo={headerData.logos && headerData.logos[1] ? headerData.logos[1].url : headerData.logos[0].url} 
          />
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
