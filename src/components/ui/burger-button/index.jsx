import { Menu } from 'react-feather'

const BurgerButton = ({ className, onClick }) => {
  return (
    <button className="d-block d-xl-none hamberger-menu" onClick={onClick}>
      <Menu size={32} />
    </button>
  )
}
export default BurgerButton
