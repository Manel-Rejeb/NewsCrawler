import { type JSX } from 'react'

import { NavBar } from '@/components/nav-bar'

export default function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div>
      <NavBar />
      <section className='container mx-auto py-4'>{children}</section>
    </div>
  )
}
