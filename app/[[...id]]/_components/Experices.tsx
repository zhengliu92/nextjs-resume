import React from 'react'
import { Heading } from './Heading'
import { CirclePlay } from 'lucide-react'
import { usePathname } from 'next/navigation'

type Props = { exps: Record<string, any>[] }

const Experices = ({ exps }: Props) => {
  const pathname = usePathname()
  const [mounted, setMounted] = React.useState(false)

  const DisplayItem = ({ item }: { item: Record<string, string> }) => {
    if (!!item.title) {
      return (
        <p className=''>
          <strong>{'<' + item.title + '>'}&nbsp;-&nbsp;</strong>
          {item.detail}
        </p>
      )
    }
    return <p>{item.detail}</p>
  }

  React.useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const Demo = ({
    desc,
    src,
    icon,
  }: {
    desc: string
    src?: string
    icon?: 'player' | 'ref' | string
  }) => {
    return (
      <div className='flex items-center'>
        {desc}
        &nbsp;
        {src && (
          <a
            href={src}
            target='_blank'
            rel='noreferrer'
            className='text-sky-500 hover:text-sky-700 '
          >
            {icon === 'ref' ? (
              <span className='w-4 h-4'>🔗</span>
            ) : (
              <CirclePlay className='h-4 w-4' />
            )}
          </a>
        )}
      </div>
    )
  }

  return (
    <div className='mt-4'>
      <Heading level={3}>
        {pathname === '/' ? 'Experiences' : '工作经历'}
      </Heading>
      <div className='flex flex-col space-y-2 border-b-2 pb-4 mt-2 border-slate-300'>
        {exps.map((exp, idx) => (
          <div
            key={idx}
            className='grid grid-cols-12 '
          >
            <div className=' col-span-8 flex'>
              <Heading level={6}> {exp.company}</Heading>&nbsp;|&nbsp;
              <Heading level={6}> {exp.title}</Heading>
            </div>
            <div className=' col-span-4 flex justify-end mr-6'>
              <Heading level={6}> {exp.from}</Heading>&nbsp;-&nbsp;
              <Heading level={6}> {exp.to}</Heading>
            </div>
            <div className='col-span-12 mx-2 mr-6 text-pretty my-1 text-sm space-y-1'>
              {exp.description.map(
                (desc: Record<string, string>, idx: string) => (
                  <div
                    key={idx}
                    className='flex items-start'
                  >
                    <li className='w-4'></li>
                    <DisplayItem item={desc} />
                  </div>
                )
              )}
            </div>
            <div className='col-span-12 mx-2 mr-6 text-pretty text-sm'>
              {exp.achievements.map(
                (descs: Record<string, string>, idx: any) => (
                  <div
                    key={idx}
                    className='flex items-start space-x-2'
                  >
                    <span className='w-2 h-2'>✅</span>
                    <Demo
                      desc={descs.description}
                      src={descs.src}
                      icon={descs.icon}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experices
