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
import { Download } from 'lucide-react'
import { ListSimpleFlat } from './components/ListZapsDashboard/Index'
import ListResumes from './components/ListResumes/Index'
import { useQuery } from '@tanstack/react-query'
import zapsQuery from '@/services/zaps'
import { IMetaData } from '@/interfaces/metaDataInterface'
import PageBasicTemplate from '@/components/shared/templates/PageBasicTemplate'
import LoaderSpinner from '@/components/shared/Loaders/LoaderSpinner/LoaderSpinner'

export default function DashboardPage() {
  const { data, isFetching, isError } = useQuery<IMetaData>({
    queryKey: ['metaData'],
    queryFn: zapsQuery.getMetaData,
  })

  function pagePdfHandler() {
    window.print()
  }
  if (isError) {
    return (
      <PageBasicTemplate
        cardTitle="Ops!!!"
        cardDescription="Parece que não foi possível obter os dados dados"
      />
    )
  } else if (data && data.zaps.totalZaps > 0) {
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
                <Button
                  className="p-2 bg-green-400 hover:bg-green-300"
                  onClick={pagePdfHandler}
                >
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
                <ListResumes
                  totalZaps={data.zaps.totalZaps}
                  averageCompletion={data.zaps.averageCompletion}
                  totalLikes={data.likes.totalLikes}
                  averageLikes={data.likes.averageLikes}
                  championZap={data.zaps.championZap}
                  totalDislikes={data.likes.totalDislikes}
                  averageDislikes={data.likes.averageDislikes}
                />
                <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-7">
                  <Card className="col-span-4   w-full h-fit ">
                    <CardHeader>
                      <CardTitle>Engajamento</CardTitle>
                      <CardDescription>
                        Alcance de pessoas x Mês
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2 ">
                      <Overview />
                    </CardContent>
                  </Card>
                  <Card className=" col-span-4  lg:col-span-3   w-full min-w-fit ">
                    <CardHeader>
                      <CardTitle>Zaps recentes</CardTitle>
                      <CardDescription>
                        Você ajudou {data?.zaps.playersCount} pessoas a estudar
                        esse mês.
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
  } else if (data && data.zaps.totalZaps === 0) {
    return (
      <PageBasicTemplate
        cardTitle="Ops!!!"
        cardDescription="Parece que você ainda não possui dados :("
        cardFooter="Crie um card e ajude as pessoas a estudarem"
      />
    )
  } else if (isFetching) {
    return (
      <>
        <div className="w-screen h-screen  flex items-center justify-center">
          <LoaderSpinner />
        </div>
      </>
    )
  }
}
