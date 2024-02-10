'use client'

import { Button } from '@/components/ui/button'

import { Input } from '@/components/ui/input'
import { TableHeader, TableHead, TableBody, Table } from '@/components/ui/table'
import { IUser } from '@/interfaces/userInterfaces'
import usersQuery from '@/services/users'
import { useQuery } from '@tanstack/react-query'
import { FilterX } from 'lucide-react'
import { useState } from 'react'
import RowRanking from './RowRanking'
import LoaderSpinner from '@/components/shared/Loaders/LoaderSpinner/LoaderSpinner'
import { cn } from '@/lib/utils'

export default function TableRanking() {
  const { data, isFetching } = useQuery<IUser[]>({
    queryKey: ['users'],
    queryFn: usersQuery.getUsers,
  })
  const [filteredListSearch, setFilteredListSearch] = useState<IUser[] | null>(
    null,
  )

  const [nameOrIdField, setNameOrIdField] = useState('')

  async function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    if (!data) return
    const searchQuery = event.target.value

    setNameOrIdField(searchQuery)

    const filteredList: IUser[] | undefined = data.filter((user) => {
      const idMatch = user.id.toString().includes(searchQuery.toLowerCase())
      const nameMatch = user.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase())

      // Prioriza os elementos que possuem correspondência tanto no id quanto no name
      return idMatch && nameMatch ? true : idMatch || nameMatch
    })

    setFilteredListSearch(filteredList)
  }

  const listUsers = filteredListSearch ?? data

  function clearFilters() {
    setNameOrIdField('')
    setFilteredListSearch(null)
  }
  if (listUsers) {
    return (
      <>
        <div className="w-full animate__animated animate__fadeIn transition-all  gap-8 grid">
          <div className=" grid sm:flex items-center justify-center gap-2 max-w-[500px]">
            <Input
              name="id"
              placeholder="Filtrar por nome ou ID"
              onChange={handleSearch}
              value={nameOrIdField}
            />

            <Button
              variant="ghost"
              className={cn(
                'text-red-600 hover:text-red-700 ',
                nameOrIdField.length > 0
                  ? ' animate__animated animate__fadeInLeft'
                  : ' animate__animated animate__fadeOutLeft',
              )}
              onClick={clearFilters}
            >
              <FilterX />
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableHead className="hidden sm:block text-center ">ID</TableHead>
              <TableHead className="text-center ">Jogador</TableHead>
              <TableHead className="hidden sm:block text-center ">
                Moral
              </TableHead>
            </TableHeader>
            <TableBody>
              {listUsers.map((user, index) => (
                <RowRanking
                  key={index}
                  id={user.id}
                  name={user.name}
                  email={user.email}
                  moral={user.name.length}
                  createdAt={user.createdAt}
                />
              ))}
            </TableBody>
          </Table>
        </div>
      </>
    )
  } else if (isFetching) {
    return (
      <>
        <div className="w-full h-[400px] flex justify-center items-center">
          <LoaderSpinner />
        </div>
      </>
    )
  }
}
