import { Loader } from 'react-feather'
import cn from 'classnames'
import { useDynamicIconImport } from '@hooks'

const Icon = ({ name, onError, className, ...rest }) => {
  const { error, loading, SvgIcon } = useDynamicIconImport(name, {
    onError
  })

  if (error) {
    return error.message
  }
  if (loading) {
    return <Loader />
  }
  if (SvgIcon) {
    return <SvgIcon className={cn(className)} {...rest} />
  }
  return null
}

export default Icon
