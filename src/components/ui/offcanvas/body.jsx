import cn from 'classnames'

const OffcanvasBody = ({ children, className }) => {
  return <div className={cn(className, 'content')}>{children}</div>
}

export default OffcanvasBody
