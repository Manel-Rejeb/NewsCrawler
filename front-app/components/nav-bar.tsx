import { type FC } from 'react'
import { SearchBar } from './search-bar'

/**
 * @description A responsive navigation bar component for the LET'SREAD application.
 * It includes a logo, navigation links, a search bar, and a subscription button.
 *
 * @returns {JSX.Element} The navigation bar component.
 */
const NavBar: FC = () => {
  return (
    <div className='flex flex-col w-full'>
      <nav className='w-full bg-zinc-950 px-4 py-4'>
        <div className='container mx-auto flex items-center justify-between'>
          {/* Logo */}
          <p className='text-white font-bold text-xl tracking-tight'>LET&apos;SREAD</p>

          {/* Navigation Links */}
          <div className='hidden md:flex items-center gap-8'>
            <p className='text-gray-300 hover:text-white transition-colors'>Home</p>
            {['Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'].map((category, index) => (
              <a key={index} href={`/${category.toLowerCase()}`} className='text-gray-300 hover:text-white transition-colors'>
                {category}
              </a>
            ))}
          </div>

          {/* Subscribe Button */}
          <button className='bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md'>Sources</button>
        </div>
      </nav>
      <SearchBar />
    </div>
  )
}

export { NavBar }
