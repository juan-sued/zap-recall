import Main from '@/components/layout/Main'
import { Card, CardContent } from '@/components/ui/card'

import TableRanking from './components/TableRanking'

export default async function RankingPage() {
  return (
    <Main>
      <section className="cardRanking p-10 w-full  max-w-[1000px]">
        <Card className="">
          <CardContent>
            <div className=" h-full flex-1 flex-col space-y-8 pt-8 md:p-8  flex">
              <div className="flex items-center justify-between space-y-2">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Ranking</h2>
                  <p className="text-muted-foreground">
                    Crie e jogue Zaps para aumentar sua moral
                  </p>
                </div>
              </div>
              <TableRanking />
            </div>
          </CardContent>
        </Card>
      </section>
    </Main>
  )
}
