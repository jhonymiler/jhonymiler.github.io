import { Link } from 'react-scroll'
import Icon from '@ui/icon'

export default function Nav({ menus, setShow }) {
  return (
    <ul className="primary-menu nav nav-pills">
      {menus.map(({ text, link, icon }) => (
        <li key={link} className="nav-item">
          {link == 'contato-modal' ? (
            <Link activeClass="active" className="nav-link smoth-animation btn-ulderline " onClick={() => setShow(true)} onKeyPress={() => setShow(true)}>
              {icon && <Icon name={icon} />}
              {text}
            </Link>
          ) : (
            <Link activeClass="active" className="nav-link smoth-animation btn-ulderline " href={`#${link}`} to={link} spy={true} smooth={true} offset={-50} duration={500}>
              {icon && <Icon name={icon} />}
              {text}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}
