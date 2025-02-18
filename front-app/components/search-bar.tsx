import { type ChangeEvent, useState, type FC } from 'react'
import { Search } from 'lucide-react'
import { useData } from '@/context/provider/Data.provider'

const SearchBar: FC = () => {
  const { getEverything } = useData()
  const [searchInput, setSearchInput] = useState<string>('')

  return (
    <div className='w-full border-b border-gray-200 bg-white'>
      <div className='container mx-auto py-4'>
        <div className='relative'>
          <button style={{ all: 'unset', cursor: 'pointer' }} onClick={() => getEverything(searchInput.length === 0 ? { q: 'Tunisia', page: '1', size: '4' } : { q: searchInput, page: '1', size: '10' })}>
            <Search className='absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500' />
          </button>
          <input
            className='w-full pl-8 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
            placeholder='Sign Up for Our Paris Olympics Newsletter'
            type='search'
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export { SearchBar }
