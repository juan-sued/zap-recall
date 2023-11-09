import Main from '@/components/layout/Main'
import { Card, CardContent } from '@/components/ui/card'

import { promises as fs } from 'fs'
import path from 'path'
import { z } from 'zod'

import { columns } from './components/columns'
import { DataTable } from './components/data-table'
import { taskSchema } from './data/schema'

async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), 'src/app/ranking/data/players-ranking.json'),
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
          <CardContent>
            <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
              <div className="flex items-center justify-between space-y-2">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Ranking</h2>
                  <p className="text-muted-foreground">
                    Crie e jogue Zaps para aumentar sua moral
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
