/**
 * @description Represents an article with metadata.
 */
export type Article = {
  category?: string
  title: string
  author: string
  description: string
  url: string
  source: string
  date: string
}

/**
 * @description Defines pagination details for API responses.
 */
export type Pageable = {
  size: number // Number of items per page
  number: number // Current page number
  totalElements: number // Total number of elements across all pages
}

/**
 * @description Represents the API response containing a list of articles and pagination details.
 */
export type ResponseEverything = {
  content: Article[] // Array of articles
  pageable: Pageable // Pagination information
}

/**
 * @description Defines the search criteria for fetching articles.
 */
export type Critere = {
  q: string
  page: string
  size: string
}

/**
 * @description Represents the structure of the store for managing article-related data.
 */
export type ResponseEverythingStore = {
  data: ResponseEverything | null
  loading: boolean
  getEverything: (critere: Critere) => void
}

/**
 * @description Initial state for the article store.
 */
export const responseEverythingStore: ResponseEverythingStore = {
  data: null,
  loading: false,
  getEverything: () => {},
}
