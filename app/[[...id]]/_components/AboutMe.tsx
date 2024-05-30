'use client'

import React from 'react'
import { Heading } from './Heading'
import { usePathname } from 'next/navigation'

type Props = {
  about: string
  location: string
  email: string
  interests: string[]
}

const AboutMe = ({ about, location, email, interests }: Props) => {
  const pathname = usePathname()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  if (!mounted) return null
  return (
    <div className='border-b-2 border-slate-300 pb-4'>
      <div className='mt-4 grid grid-cols-12 items-center gap-8'>
        <div className='text-wrap text-justify font-sans col-span-8 whitespace-pre-line max-sm:col-span-12'>
          <Heading
            level={3}
            className=' font-semibold mb-2'
          >
            {pathname === '/' ? 'About Me' : '关于我'}
          </Heading>
          <div className=' indent-8 '>{about}</div>
        </div>
        <div className='col-span-4 h-full max-sm:col-span-12 max-sm:mt-4 space-y-6'>
          <div>
            <Heading
              level={3}
              className='font-semibold mb-1'
            >
              {pathname === '/' ? 'Contact Information' : '联系方式'}
            </Heading>
            <div className='indent-4'>
              <div>📍 &nbsp; - &nbsp;{location}</div>
              <div>📧 &nbsp; - &nbsp;{email}</div>
            </div>
          </div>
          <div>
            <Heading
              level={3}
              className='font-semibold mb-1'
            >
              {pathname === '/' ? 'Interests' : '关注领域'}
            </Heading>
            <div className='indent-4 text-sm'>
              {interests.map((interest, i) => (
                <div
                  key={i}
                  className=''
                >
                  ⭐&nbsp;{interest}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
