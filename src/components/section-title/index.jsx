import cn from 'classnames'

const SectionTitle = ({ title, subtitle, align, className, titleClass, ...rest }) => {
  return (
    <div className={cn(`section-title text-${align}`, className)} {...rest}>
      {subtitle && <span className="subtitle">{subtitle}</span>}
      {title && <h2 className={cn('title', titleClass)}>{title}</h2>}
    </div>
  )
}

export default SectionTitle
