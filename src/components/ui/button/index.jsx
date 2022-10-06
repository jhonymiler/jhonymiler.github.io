import cn from 'classnames'
import Icon from '@ui/icon'
import { Link } from 'react-scroll'

const Button = ({ children, type, label, onClick, className, path, icon, iconPosition }) => {
  if (path) {
    const internal = /^\/(?!\/)/.test(path)
    const isHash = path?.startsWith('#')

    if (internal) {
      return (
        <Link aria-label={label} className={cn(className, 'rn-btn')} to={path}>
          {icon && iconPosition === 'left' && <Icon name={icon} size={14} className={`icon-${iconPosition}`} />}
          <span>{children}</span>
          {icon && iconPosition === 'right' && <Icon name={icon} size={14} className={`icon-${iconPosition}`} />}
        </Link>
      )
    }
    if (isHash) {
      return (
        <a aria-label={label} onClick={onClick} className={cn(className, 'rn-btn')} href={path}>
          {icon && iconPosition === 'left' && <Icon name={icon} size={14} className={`icon-${iconPosition}`} />}
          <span>{children}</span>
          {icon && iconPosition === 'right' && <Icon name={icon} size={14} className={`icon-${iconPosition}`} />}
        </a>
      )
    }
    return (
      <a aria-label={label} className={cn(className, 'rn-btn')} href={path} target="_blank" rel="noreferrer noopener">
        {icon && iconPosition === 'left' && <Icon name={icon} size={14} className={`icon-${iconPosition}`} />}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <Icon name={icon} size={14} className={`icon-${iconPosition}`} />}
      </a>
    )
  }

  return (
    <button aria-label={label} onClick={onClick} className={cn(className, 'rn-btn')} type={type}>
      {icon && iconPosition === 'left' && <Icon name={icon} size={14} className={`icon-${iconPosition}`} />}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <Icon name={icon} size={14} className={`icon-${iconPosition}`} />}
    </button>
  )
}

export default Button
