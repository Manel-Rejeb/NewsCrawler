import { type JSX } from 'react'
import { useState, useContext, createContext, useEffect } from 'react'
import { responseEverythingStore, ResponseEverythingStore, Critere } from '@/context/store/data.store'
import { fetcher } from '@/utils/fetcher'

const DataContext = createContext<ResponseEverythingStore>(responseEverythingStore)

export const useData = () => useContext(DataContext)

export default function DataProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<ResponseEverythingStore['data']>(responseEverythingStore.data)

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

    setLoading(false)
  }

  useEffect(() => {
    getEverything({ q: 'Tunisia', page: '1', size: '4' })
  }, [])

  return <DataContext.Provider value={{ data, loading, getEverything }}>{children}</DataContext.Provider>
}
