import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface IMain {
  children: ReactNode
  className?: string
}

export default function Main({ children, className }: IMain) {
  return (
    <>
      <main
        className={cn(
          'flex  flex-col items-center justify-between  mt-32 ',
          className,
        )}
      >
        {children}
      </main>
    </>
  )
}
