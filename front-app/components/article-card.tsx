import { type FC } from 'react'

type ArticleCardProps = {
  title: string
  author: string
  time: string
  category: string
  readTime: string
  image: string
}

/**
 * @description A card component to display an article preview.
 * @param {ArticleCardProps} props - The article details.
 */
const ArticleCard: FC<ArticleCardProps> = ({ title, author, time, category, image, readTime }) => {
  return (
    <div className='border rounded-lg shadow-sm overflow-hidden bg-white'>
      <div className='p-4 space-y-3'>
        <div className='relative aspect-[4/3] w-full'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={title} className='object-cover rounded-md w-full h-full' />
        </div>

        {/* Content Section */}
        <div className='space-y-2'>
          {/* Author Info */}
          <div className='flex items-center gap-2'>
            <div className='h-6 w-6 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image} alt='Avatar' className='w-full h-full object-cover' />
            </div>
            <span className='text-sm font-medium'>{author}</span>
            <span className='text-sm text-gray-500'>• {time}</span>
          </div>

          {/* Title */}
          <h3 className='font-medium text-sm line-clamp-2'>{title}</h3>

          {/* Category and Read Time */}
          <div className='flex items-center gap-2'>
            <a href='#' className='text-xs text-red-600 hover:underline'>
              {category}
            </a>
            <span className='text-xs text-gray-500'>{readTime}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ArticleCard }
