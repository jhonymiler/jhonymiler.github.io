import cn from 'classnames'

const TimelineCard = ({ title, subtitle, rating, desc, layout, className }) => {
  return (
    <div className={cn('resume-single-list', className)}>
      <div className={cn('inner', layout === 2 && 'psudo-after-none psudo-after-none')}>
        <div className="heading">
          <div className="title">
            <h4>{title}</h4>
            <span>{subtitle}</span>
          </div>
          {rating && (
            <div className="date-of-time">
              <span>{rating}</span>
            </div>
          )}
        </div>
        <p
          className="description"
          dangerouslySetInnerHTML={{
            __html: desc
          }}
        />
      </div>
    </div>
  )
}

export default TimelineCard
