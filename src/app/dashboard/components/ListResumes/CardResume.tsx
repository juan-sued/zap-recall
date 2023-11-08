import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ReactNode } from 'react'

interface ICardResume {
  title: string
  value: string
  valueDetail: string
  children: ReactNode
}

export default function CardResume({
  title,
  value,
  valueDetail,
  children,
}: ICardResume) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {children}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{valueDetail}</p>
      </CardContent>
    </Card>
  )
}
