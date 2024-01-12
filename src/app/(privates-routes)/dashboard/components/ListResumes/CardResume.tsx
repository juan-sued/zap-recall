import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface ICardResume {
  title: string
  value: string
  valueDetail: string
  children: ReactNode
  classNameValue?: string
}

export default function CardResume({
  title,
  value,
  valueDetail,
  classNameValue,
  children,
}: ICardResume) {
  return (
    <Card className="flex flex-col justify-between text-slate-700">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle
          className={'text-sm font-medium text-slate-600 dark:text-slate-300'}
        >
          {title}
        </CardTitle>
        {children}
      </CardHeader>
      <CardContent className="flex flex-col justify-between">
        <div
          className={cn(
            'text-2xl font-bold truncate text-slate-700 dark:text-slate-100',
            classNameValue,
          )}
        >
          {value}
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {valueDetail}
        </p>
      </CardContent>
    </Card>
  )
}
