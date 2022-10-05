import React, { memo } from 'react'
import cn from 'classnames'

const Offcanvas = memo(({ children, className, isOpen, onClick }) => {
  return (
    <div className={cn('popup-mobile-menu', isOpen ? 'menu-open' : '', className)} onClick={onClick} onKeyPress={onClick} role="button" tabIndex={0}>
      <div className="inner" onClick={(e) => e.stopPropagation()} onKeyPress={onClick} role="button" tabIndex={0}>
        {children}
      </div>
    </div>
  )
})


export default Offcanvas
