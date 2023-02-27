import React from 'react'

export default function Layout({
  children,
}: {
  children: React.ReactNode
  params: {}
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
