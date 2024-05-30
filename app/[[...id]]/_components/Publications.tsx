import { usePathname } from 'next/navigation'
import React from 'react'
import { Heading } from './Heading'

type Props = {
  pubs: Item[]
}
type Item = {
  title: string
  src: string
}

const Publications = ({ pubs }: Props) => {
  const pathname = usePathname()

  return (
    <div className='mt-4'>
      <Heading level={3}>
        {' '}
        {pathname === '/' ? 'Publications' : '出版物'}
      </Heading>
      <div className='flex flex-col space-y-1 border-b-2 pb-4 mt-2 border-slate-300 text-sm'>
        {pubs.map((pub, i) => (
          <div
            key={i}
            className='flex items-start dark:text-sky-500 dark:hover:text-sky-700 text-sky-700 hover:text-sky-500 mr-4'
          >
            <span>{i + 1}. &nbsp;</span>
            <a
              href={pub.src}
              target='_blank'
              rel='noreferrer'
              className=''
            >
              {pub.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Publications
