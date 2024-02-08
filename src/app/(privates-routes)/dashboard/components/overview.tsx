'use client'

import { IMetaData } from '@/interfaces/metaDataInterface'
import { useQueryClient } from '@tanstack/react-query'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

export function Overview() {
  const queryClient = useQueryClient()
  const metaData: IMetaData | undefined = queryClient.getQueryData(['metaData'])
  // passar metaData por props
  if (metaData) {
    return (
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={metaData.zaps.playersPerMonth}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    )
  } else {
    return (
      <ResponsiveContainer width="100%" height={350}>
        <div className=" w-full h-full  flex justify-center items-center">
          <h1>Não há dados para monstrar</h1>
        </div>
      </ResponsiveContainer>
    )
  }
}
