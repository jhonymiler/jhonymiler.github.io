import cn from 'classnames'

const SocialLink = ({ path, children, className }) => {
  return (
    <li className={cn(className)}>
      <a href={path} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </li>
  )
}


export default SocialLink
