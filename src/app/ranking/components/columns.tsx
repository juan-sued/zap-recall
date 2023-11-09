'use client'

import { ColumnDef } from '@tanstack/react-table'

import { Checkbox } from '@/components/ui/checkbox'

import { elos } from '../data/data'
import { Task } from '../data/schema'
import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'
import { Badge } from '@/components/ui/badge'

export const columns: ColumnDef<Task>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="points" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'player',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Player" />
    ),
    cell: ({ row }) => {
      const elo = elos.find((elo) => elo.value === row.original.elo)

      return (
        <div className="flex space-x-2">
          {elo && <Badge variant="outline">{elo.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue('player')}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: 'elo',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Elo" />
    ),
    cell: ({ row }) => {
      const elo = elos.find((elo) => elo.value === row.original.elo)

      return (
        <div className="flex space-x-2">
          {elo && <Badge variant="outline">{elo.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue('elo')}
          </span>
        </div>
      )
    },
  },

  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
