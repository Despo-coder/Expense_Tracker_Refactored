'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { usePathname } from 'next/navigation'

const ChartsButton = () => {
  const pathname = usePathname()
  const isChartPage = pathname === '/charts'

  return (
    <Link href={isChartPage ? '/' : '/charts'}>
      <Button className='bg-slate-700 rounded-xl text-white sm:mr-32 howver:bg-slate-800 hover:bg-slate-800'>
        {isChartPage ? 'Go Back Home' : 'View Charts'}
      </Button>
    </Link>
  )
}

export default ChartsButton
