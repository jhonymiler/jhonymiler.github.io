const LinguagensCard = ({ image, name, path, ...rest }) => {
  return (
    <div className="main-content" {...rest}>
      <div className="inner text-center">
        {image?.src && (
          <div className="thumbnail">
            <a href={path}>
              <img src={image.src} title={image?.title || name} />
            </a>
          </div>
        )}
        <div className="seperator"></div>
        <div className="client-name">
          <span>
            <a href={path}>{name}</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default LinguagensCard
