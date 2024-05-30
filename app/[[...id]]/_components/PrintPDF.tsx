import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import React from 'react'

const PrintPDF = () => {
  // print the page to PDF
  const pathname = usePathname()
  const printPDF = () => {
    window.print()
  }
  return (
    // don't show the button in the print preview
    <div className='print:hidden block'>
      <Button
        onClick={printPDF}
        variant={'outline'}
      >
        {pathname === '/' ? 'Print' : '打印'}
      </Button>
    </div>
  )
}

export default PrintPDF
