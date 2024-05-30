import React from 'react'
import { Heading } from './Heading'
import { usePathname } from 'next/navigation'

type Props = {
  edus: EDU[]
}
type EDU = {
  from: string
  to: string
  school: string
  degree: string
  location: string
}

const Education = ({ edus }: Props) => {
  const pathname = usePathname()

  return (
    <div className='mt-4'>
      <Heading level={3}>
        {' '}
        {pathname === '/' ? 'Education' : '教育经历'}
      </Heading>
      <div className='flex flex-col space-y-1 border-b-2 pb-4 mt-2 border-slate-300'>
        {edus.map((edu, i) => (
          <div
            key={i}
            className='flex items-start justify-between mr-6'
          >
            <div>
              <strong>{edu.school}&nbsp;｜&nbsp;</strong>
              {edu.degree}
            </div>
            <div>
              {edu.location} | {edu.from} - {edu.to}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
