const ContentTitle = ({ title, subtitle }) => {
  return (
    <div className="content-title">
      <span className="subtitle">{subtitle}</span>
      <h4 className="maintitle">{title}</h4>
    </div>
  )
}

export default ContentTitle
