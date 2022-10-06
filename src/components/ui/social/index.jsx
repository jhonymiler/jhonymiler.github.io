import cn from 'classnames'

const Social = ({ className, children }) => {
  return <ul className={cn(className, 'social-share d-flex liststyle')}>{children}</ul>
}

export { default as SocialLink } from './social-link'

export default Social
