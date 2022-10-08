import cn from 'classnames'

const ErrorText = ({ className, children }) => {
  return <span className={cn('text-red mt-2 d-inline-block', className)}>{children}</span>
}

export default ErrorText
