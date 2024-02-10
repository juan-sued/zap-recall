import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { TableCell, TableRow } from '@/components/ui/table'

import { MoreHorizontal } from 'lucide-react'
import { FormattedDate } from 'react-intl'

interface IRowRanking {
  id: number
  name: string
  email: string
  createdAt: Date
  moral: number
}
export default function RowRanking({
  id,
  name,
  email,
  createdAt,
  moral,
}: IRowRanking) {
  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell truncate overflow-ellipsis text-center   max-w-[50px] md:max-w-full">
        {id}
      </TableCell>
      <TableCell className="truncate overflow-ellipsis text-center w-full   max-w-[50px] md:max-w-full">
        {name}
      </TableCell>
      <TableCell className="hidden sm:table-cell truncate overflow-ellipsis text-center   max-w-[50px] md:max-w-full">
        {moral}
      </TableCell>
      <Dialog>
        <DialogTrigger asChild>
          <TableCell className="text-center w-full  ">
            <Button variant="ghost">
              <MoreHorizontal />
            </Button>
          </TableCell>
        </DialogTrigger>
        <DialogContent className="max-w-[90%] sm:max-w-[400px] rounded-md bg-white dark:bg-blueTheme-500">
          <DialogHeader className="text-muted-foreground">
            Informações do jogador
          </DialogHeader>
          <DialogDescription className="grid gap-4">
            <div className="block">
              <Label>ID:</Label>
              <p>{id}</p>
            </div>
            <div className="block">
              <Label>Nome:</Label>
              <p>{name}</p>
            </div>
            <div className="block">
              <Label>Email:</Label>
              <p>{email}</p>
            </div>
            <div className="block">
              <Label>Entrou em:</Label>
              <p>
                {
                  <FormattedDate
                    value={createdAt}
                    day="numeric"
                    year="numeric"
                    month="long"
                  />
                }
              </p>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </TableRow>
  )
}
