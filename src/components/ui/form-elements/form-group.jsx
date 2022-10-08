import cn from 'classnames'

const FormGroup = ({ className, children }) => {
  return <div className={cn('form-group', className)}>{children}</div>
}

export default FormGroup
