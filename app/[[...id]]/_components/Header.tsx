import React from 'react'
import { Heading } from './Heading'
import ModeToggle from './ModeToggle'
import PrintPDF from './PrintPDF'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'

interface HeaderProps {
  fullName: string
  title: string
}

export const Header = ({ fullName, title }: HeaderProps) => {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div className='mt-12 border-b-2 border-slate-300 pb-8'>
      <div className='grid grid-cols-12 items-start'>
        <div className='col-span-8 mt-4 whitespace-nowrap'>
          <Heading level={1}>{fullName}</Heading>
        </div>
        <div className=' col-span-4 mr-6 max-sm:col-span-12 w-full'>
          <Image
            src='/profile.png'
            alt='profile'
            className='rounded-full ml-auto max-sm:ml-0'
            width={100}
            height={100}
          />
        </div>
        <div className='col-span-12 max-sm:flex max-sm:flex-col flex justify-between mt-2'>
          <Heading
            className='text-balance text-primary/60'
            level={2}
          >
            {title}
          </Heading>
          <div className='flex space-x-2 justify-end items-center mr-6 print:hidden max-sm:justify-start max-sm:mt-2'>
            <PrintPDF />
            <ModeToggle />
            <Button
              variant='ghost'
              className={cn(
                'w-[2em] hover:bg-transparent',
                pathname === '/' && 'font-bold underline underline-offset-2'
              )}
              onClick={() => router.push('/')}
            >
              EN
            </Button>
            &nbsp;|
            <Button
              variant='ghost'
              className={cn(
                'w-[2em] hover:bg-transparent',
                pathname === '/zh' && 'font-bold underline underline-offset-2'
              )}
              onClick={() => router.push('/zh')}
            >
              中文
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
