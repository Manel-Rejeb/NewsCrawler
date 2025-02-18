import { ArticleCard } from '@/components/article-card'
import { useData } from '@/context/provider/Data.provider'

export default function Home() {
  const { data, loading } = useData()

  return (
    <div>
      <div className='grid grid-cols-4 gap-4'>
        {!loading ? (
          data && data.content.map((article, index) => <ArticleCard key={index} title={article.title} author={article.author} time={article.date} category={article.source} image={article.url} readTime='5 min' />)
        ) : (
          <div className='p-2 animate-pulse' />
        )}
      </div>
    </div>
  )
}
