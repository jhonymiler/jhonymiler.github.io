import React from 'react'
import cn from 'classnames'
import { X } from 'react-feather'

const OffcanvasHeader = ({ className, onClick, logo }) => {
  return (
    <div className={cn('menu-top', className)}>
      <div className="menu-header">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo" width={60} />
          </a>
        </div>
        <div className="close-button">
          <button className="close-menu-activation close" onClick={onClick}>
            <X />
          </button>
        </div>
      </div>
    </div>
  )
}

export default OffcanvasHeader
