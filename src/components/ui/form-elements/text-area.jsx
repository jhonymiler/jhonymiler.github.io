import cn from 'classnames'
import { forwardRef } from 'react'

const Textarea = forwardRef(({ id, name, className, ...rest }, ref) => {
  return <textarea className={cn('form-control', className)} name={name} id={id} ref={ref} cols="30" rows="10" {...rest}></textarea>
})

export default Textarea
