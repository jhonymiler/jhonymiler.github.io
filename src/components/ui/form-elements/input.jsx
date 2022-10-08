import { forwardRef } from 'react'
import cn from 'classnames'

const Input = forwardRef(({ type, id, name, className, size, ...rest }, ref) => {
  return <input className={cn('form-control', `form-control-${size}`, className)} name={id} id={name} type={type} ref={ref} {...rest} />
})

export default Input
