'use client'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card'

import { Overview } from './components/overview'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { CalendarDateRangePicker } from './components/date-range-picker'
import { Download } from 'lucide-react'
import { ListSimpleFlat } from './components/ListZapsDashboard/Index'
import ListResumes from './components/ListResumes/Index'

export default function DashboardPage() {
  // requisição meta data user

  return (
    <>
      <div className="flex-col flex mt-20 animate__animated animate__fadeIn">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex flex-col sm:flex-row  items-center justify-between space-y-2">
            <div className=" w-full">
              <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            </div>
            <div
              className="flex items-center space-x-2 w-full
            justify-end"
            >
              <CalendarDateRangePicker />
              <Button className="p-2 bg-green-400 hover:bg-green-300">
                <Download className="w-full h-full" />
              </Button>
            </div>
          </div>
          <Tabs defaultValue="overview">
            <TabsList className="w-full  h-full sm:w-fit text-xs">
              <TabsTrigger value="overview">Resumo</TabsTrigger>
              <TabsTrigger value="analytics" disabled>
                Analytics
              </TabsTrigger>
              <TabsTrigger value="meus_zaps" disabled>
                Meus Zaps
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <ListResumes />
              <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-7">
                <Card className="col-span-4   w-full h-fit ">
                  <CardHeader>
                    <CardTitle>Engajamento</CardTitle>
                    <CardDescription>Alcance de pessoas x Mês</CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2 ">
                    <Overview />
                  </CardContent>
                </Card>
                <Card className=" col-span-4  lg:col-span-3   w-full min-w-fit ">
                  <CardHeader>
                    <CardTitle>Zaps recentes</CardTitle>
                    <CardDescription>
                      Você ajudou 265 pessoas a estudar esse mês.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ListSimpleFlat />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
