'use client'

import { getCookie } from 'cookies-next'
import { useState } from 'react'

export default function MyComponent() {
  const [cookie, setCookie] = useState(getCookie('myCookie'))
  return (
    <>
      <p>{cookie}</p>
    </>
  )
}
