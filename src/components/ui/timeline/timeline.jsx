import cn from 'classnames'

const Timeline = ({ children, className }) => {
  return <div className={cn('experience-list', className)}>{children}</div>
}


export default Timeline
