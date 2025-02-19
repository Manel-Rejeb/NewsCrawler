import { type JSX } from 'react'
import { useState, useContext, createContext, useEffect } from 'react'
import { responseEverythingStore, ResponseEverythingStore, Critere } from '@/context/store/data.store'
import { fetcher } from '@/utils/fetcher'

/**
 * @description Creates a React context for managing data related to articles.
 */
const DataContext = createContext<ResponseEverythingStore>(responseEverythingStore)

/**
 * @description Custom hook to access the DataContext.
 * @returns The data context containing fetched data, loading state, and the fetching function.
 */
export const useData = () => useContext(DataContext)

/**
 * @description Provides data fetching and state management for articles.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components wrapped inside the provider.
 * @returns {JSX.Element} The DataContext provider component.
 */
export default function DataProvider({ children }: { children: React.ReactNode }): JSX.Element {
  // State to manage loading status
  const [loading, setLoading] = useState<boolean>(false)

  // State to store fetched data
  const [data, setData] = useState<ResponseEverythingStore['data']>(responseEverythingStore.data)

  /**
   * @description Fetches articles based on the given criteria and updates the state.
   * @param {Critere} critere - The criteria object containing query parameters.
   */
  function getEverything(critere: Critere) {
    setLoading(true)
    console.log(critere)
    fetcher
      .get('/api/articles/everything', {
        withCredentials: true,
        params: {
          ...critere,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setData(res.data)
          console.log(res.data)
          setLoading(false)
        }
      })

    setLoading(false) // This should be moved inside `.then` or `.finally` to ensure proper loading state handling.
  }

  // Fetch data on component mount with predefined criteria
  useEffect(() => {
    getEverything({ q: 'Tunisia', page: '1', size: '4' })
  }, [])

  return <DataContext.Provider value={{ data, loading, getEverything }}>{children}</DataContext.Provider>
}
