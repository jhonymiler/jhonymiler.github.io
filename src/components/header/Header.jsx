import PopupMenu from '@components/header/popup-menu'
import BurgerButton from '@ui/burger-button'
import { useOffcanvas } from '@hooks'
import Nav from './Nav'

import { useHeader } from '../../data/Header'
import { useQueryClient } from '@tanstack/react-query'

export default function Header() {
  const { offcanvas, offcanvasHandler } = useOffcanvas()
  const queryClient = useQueryClient()

  const { data } = useHeader()
  return (
    <>
      <header className="rn-header haeder-default black-logo-version header--fixed header--sticky">
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
                <Nav menus={data.headers} />
              </nav>
              <div className="header-right">
                <a className="rn-btn" target="_blank" href="#">
                  <span>Wallet</span>
                </a>

                <BurgerButton onClick={offcanvasHandler} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <PopupMenu isOpen={offcanvas} onClick={offcanvasHandler} menus={data.headers} logo={data.logos[1].url} />
    </>
  )
}
