import React from 'react'
import { Heading } from './Heading'
import { usePathname } from 'next/navigation'

type skill = {
  Name: string
  List: string[]
}
type Props = {
  skills: skill[]
}

const Skills = ({ skills }: Props) => {
  const pathname = usePathname()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <>
      <Heading
        level={3}
        className=' mt-4'
      >
        {pathname === '/' ? 'Skills' : '技能'}
      </Heading>
      <div className='border-b-2 pb-4 border-slate-300'>
        <div className='grid grid-cols-3 gap-6 '>
          {skills.map((skill, idx) => (
            <div key={idx}>
              <Heading
                level={5}
                className='my-1 '
              >
                {skill.Name}
              </Heading>
              <ul className='grid grid-cols-2 max-sm:grid-cols-1'>
                {skill.List.map((item, idx) => (
                  <li key={idx}> - {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Skills
