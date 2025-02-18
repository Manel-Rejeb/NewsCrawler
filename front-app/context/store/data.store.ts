export type Article = {
  category?: string
  title: string
  author: string
  description: string
  url: string
  source: string
  date: string
}

export type Pageable = {
  size: number
  number: number
  totalElements: number
}

export type ResponseEverything = {
  content: Article[]
  pageable: Pageable
}

export type Critere = {
  q: string
  page: string
  size: string
}

export type ResponseEverythingStore = {
  data: ResponseEverything | null
  loading: boolean
  getEverything: (critere: Critere) => void
}

export const responseEverythingStore: ResponseEverythingStore = {
  data: null,
  loading: false,
  getEverything: () => {},
}
