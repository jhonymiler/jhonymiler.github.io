import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { WOW } from 'wow.js'
import Aos from 'aos'
const External = () => {
  useEffect(() => {
    const wow = new WOW({
      offset: 100,
      mobile: false,
      live: false
    })
    wow.init()

    Aos.init({
      once: true
    })
  }, [])

  useEffect(() => {
    if (Aos) {
      Aos.refresh()
    }
  })

  return (
    <React.Fragment>
      <Helmet></Helmet>
    </React.Fragment>
  )
}

export default External
