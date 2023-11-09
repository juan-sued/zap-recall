import Main from '@/components/layout/Main'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { promises as fs } from 'fs'
import path from 'path'
import Image from 'next/image'
import { z } from 'zod'

import { columns } from './components/columns'
import { DataTable } from './components/data-table'
import { taskSchema } from './data/schema'
// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), 'src/app/ranking/data/tasks.json'),
  )

  const tasks = JSON.parse(data.toString())

  return z.array(taskSchema).parse(tasks)
}

export default async function RankingPage() {
  const tasks = await getTasks()

  return (
    <Main>
      <section className="cardRanking p-10 w-full ">
        <Card className="">
          <CardHeader>
            <CardTitle>Ranking</CardTitle>
            <CardDescription>
              Crie e jogue Zaps para aumentar sua moral
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="md:hidden">
              <Image
                src=""
                width={1280}
                height={998}
                alt="Playground"
                className="block dark:hidden"
              />
              <Image
                src="/image/logo.png"
                width={1280}
                height={998}
                alt="Playground"
                className="hidden dark:block"
              />
            </div>
            <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
              <div className="flex items-center justify-between space-y-2">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Welcome back!
                  </h2>
                  <p className="text-muted-foreground">
                    Here&apos;s a list of your tasks for this month!
                  </p>
                </div>
              </div>
              <DataTable data={tasks} columns={columns} />
            </div>
          </CardContent>
        </Card>
      </section>
    </Main>
  )
}
