'use client'

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const data = [
  {
    name: 'Jan',
    total: Math.floor(Math.random() * 10) + 1000,
  },
  {
    name: 'Fev',
    total: Math.floor(Math.random() * 200) + 1000,
  },
  {
    name: 'Mar',
    total: Math.floor(Math.random() * 321) + 1000,
  },
  {
    name: 'Abr',
    total: Math.floor(Math.random() * 451) + 1000,
  },
  {
    name: 'Mai',
    total: Math.floor(Math.random() * 310) + 1000,
  },
  {
    name: 'Jun',
    total: Math.floor(Math.random() * 700) + 1000,
  },
  {
    name: 'Jul',
    total: Math.floor(Math.random() * 812) + 1000,
  },
  {
    name: 'Ago',
    total: Math.floor(Math.random() * 1000) + 1000,
  },
  {
    name: 'Set',
    total: Math.floor(Math.random() * 1000) + 1000,
  },
  {
    name: 'Out',
    total: Math.floor(Math.random() * 500) + 1000,
  },
  {
    name: 'Nov',
    total: Math.floor(Math.random() * 212) + 1000,
  },
  {
    name: 'Dez',
    total: Math.floor(Math.random() * 2000) + 1000,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
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
}
